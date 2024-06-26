<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['dateSelect'])

const setData = (year, month, day) => {
  emit('dateSelect', { year, month, day })
}

onMounted(() => {
  const easing = {
    easeOutCubic: function (pos) {
      return Math.pow(pos - 1, 3) + 1
    },
    easeOutQuart: function (pos) {
      return -(Math.pow(pos - 1, 4) - 1)
    },
  }

  class IosSelector {
    constructor(options) {
      let defaults = {
        el: '',
        type: 'infinite',
        count: 20,
        sensitivity: 0.8,
        source: [],
        value: null,
        onChange: null,
      }

      this.options = Object.assign({}, defaults, options)
      this.options.count = this.options.count - (this.options.count % 4)
      Object.assign(this, this.options)

      this.halfCount = this.options.count / 2
      this.quarterCount = this.options.count / 4
      this.a = this.options.sensitivity * 10
      this.minV = Math.sqrt(1 / this.a)
      this.selected = this.source[0]

      this.exceedA = 10
      this.moveT = 0
      this.moving = false

      this.elems = {
        el: document.querySelector(this.options.el),
        circleList: null,
        circleItems: null, // list

        highlight: null,
        highlightList: null,
        highListItems: null, // list
      }
      this.events = {
        touchstart: null,
        touchmove: null,
        touchend: null,
      }

      this.itemHeight = (this.elems.el.offsetHeight * 3) / this.options.count
      this.itemAngle = 360 / this.options.count
      this.radius = this.itemHeight / Math.tan((this.itemAngle * Math.PI) / 180)

      this.scroll = 0
      this._init()
    }

    _init() {
      this._create(this.options.source)

      let touchData = {
        startY: 0,
        yArr: [],
      }

      for (let eventName in this.events) {
        this.events[eventName] = ((eventName) => {
          return (e) => {
            if (this.elems.el.contains(e.target) || e.target === this.elems.el) {
              e.preventDefault()
              if (this.source.length) {
                this['_' + eventName](e, touchData)
              }
            }
          }
        })(eventName)
      }

      this.elems.el.addEventListener('touchstart', this.events.touchstart)
      document.addEventListener('mousedown', this.events.touchstart)
      this.elems.el.addEventListener('touchend', this.events.touchend)
      document.addEventListener('mouseup', this.events.touchend)
      if (this.source.length) {
        this.value = this.value !== null ? this.value : this.source[0].value
        this.select(this.value)
      }
    }

    _touchstart(e, touchData) {
      this.elems.el.addEventListener('touchmove', this.events.touchmove)
      document.addEventListener('mousemove', this.events.touchmove)
      let eventY = e.clientY || e.touches[0].clientY
      touchData.startY = eventY
      touchData.yArr = [[eventY, new Date().getTime()]]
      touchData.touchScroll = this.scroll
      this._stop()
    }

    _touchmove(e, touchData) {
      let eventY = e.clientY || e.touches[0].clientY
      touchData.yArr.push([eventY, new Date().getTime()])
      if (touchData.length > 5) {
        touchData.unshift()
      }

      let scrollAdd = (touchData.startY - eventY) / this.itemHeight
      let moveToScroll = scrollAdd + this.scroll

      if (this.type === 'normal') {
        if (moveToScroll < 0) {
          moveToScroll *= 0.3
        } else if (moveToScroll > this.source.length) {
          moveToScroll = this.source.length + (moveToScroll - this.source.length) * 0.3
        }
      } else {
        moveToScroll = this._normalizeScroll(moveToScroll)
      }

      touchData.touchScroll = this._moveTo(moveToScroll)
    }

    _touchend(e, touchData) {
      this.elems.el.removeEventListener('touchmove', this.events.touchmove)
      document.removeEventListener('mousemove', this.events.touchmove)

      let v

      if (touchData.yArr.length === 1) {
        v = 0
      } else {
        let startTime = touchData.yArr[touchData.yArr.length - 2][1]
        let endTime = touchData.yArr[touchData.yArr.length - 1][1]
        let startY = touchData.yArr[touchData.yArr.length - 2][0]
        let endY = touchData.yArr[touchData.yArr.length - 1][0]

        v = (((startY - endY) / this.itemHeight) * 1000) / (endTime - startTime)
        let sign = v > 0 ? 1 : -1

        v = Math.abs(v) > 30 ? 30 * sign : v
      }

      this.scroll = touchData.touchScroll
      this._animateMoveByInitV(v)
    }

    _create(source) {
      if (!source.length) {
        return
      }

      let template = `
      <div class="select-wrap">
        <ul class="select-options" style="transform: translate3d(0, 0, ${-this.radius}px) rotateX(0deg);">
          {{circleListHTML}}
          <!-- <li class="select-option">a0</li> -->
        </ul>
        <div class="highlight">
          <ul class="highlight-list">
            <!-- <li class="highlight-item"></li> -->
            {{highListHTML}}
          </ul>
        </div>
      </div>
    `

      if (this.options.type === 'infinite') {
        let concatSource = [].concat(source)
        while (concatSource.length < this.halfCount) {
          concatSource = concatSource.concat(source)
        }
        source = concatSource
      }
      this.source = source
      let sourceLength = source.length

      let circleListHTML = ''
      for (let i = 0; i < source.length; i++) {
        circleListHTML += `<li class="select-option"
                    style="
                      top: ${this.itemHeight * -0.5}px;
                      height: ${this.itemHeight}px;
                      line-height: ${this.itemHeight}px;
                      transform: rotateX(${-this.itemAngle * i}deg) translate3d(0, 0, ${this.radius}px);
                    "
                    data-index="${i}"
                    >${source[i].text}</li>`
      }

      let highListHTML = ''
      for (let i = 0; i < source.length; i++) {
        highListHTML += `<li class="highlight-item" style="height: ${this.itemHeight}px;">
                        ${source[i].text}
                      </li>`
      }

      if (this.options.type === 'infinite') {
        for (let i = 0; i < this.quarterCount; i++) {
          circleListHTML =
            `<li class="select-option"
                      style="
                        top: ${this.itemHeight * -0.5}px;
                        height: ${this.itemHeight}px;
                        line-height: ${this.itemHeight}px;
                        transform: rotateX(${this.itemAngle * (i + 1)}deg) translate3d(0, 0, ${this.radius}px);
                      "
                      data-index="${-i - 1}"
                      >${source[sourceLength - i - 1].text}</li>` + circleListHTML
          circleListHTML += `<li class="select-option"
                      style="
                        top: ${this.itemHeight * -0.5}px;
                        height: ${this.itemHeight}px;
                        line-height: ${this.itemHeight}px;
                        transform: rotateX(${-this.itemAngle * (i + sourceLength)}deg) translate3d(0, 0, ${
            this.radius
          }px);
                      "
                      data-index="${i + sourceLength}"
                      >${source[i].text}</li>`
        }

        highListHTML =
          `<li class="highlight-item" style="height: ${this.itemHeight}px;">
                          ${source[sourceLength - 1].text}
                      </li>` + highListHTML
        highListHTML += `<li class="highlight-item" style="height: ${this.itemHeight}px;">${source[0].text}</li>`
      }
      this.elems.el.innerHTML = template
        .replace('{{circleListHTML}}', circleListHTML)
        .replace('{{highListHTML}}', highListHTML)
      this.elems.circleList = this.elems.el.querySelector('.select-options')
      this.elems.circleItems = this.elems.el.querySelectorAll('.select-option')

      this.elems.highlight = this.elems.el.querySelector('.highlight')
      this.elems.highlightList = this.elems.el.querySelector('.highlight-list')
      this.elems.highlightitems = this.elems.el.querySelectorAll('.highlight-item')

      if (this.type === 'infinite') {
        this.elems.highlightList.style.top = -this.itemHeight + 'px'
      }

      this.elems.highlight.style.height = this.itemHeight + 'px'
      this.elems.highlight.style.lineHeight = this.itemHeight + 'px'
    }

    /**
     * @param {init} scroll
     * @return
     */
    _normalizeScroll(scroll) {
      let normalizedScroll = scroll

      while (normalizedScroll < 0) {
        normalizedScroll += this.source.length
      }
      normalizedScroll = normalizedScroll % this.source.length
      return normalizedScroll
    }

    /**
     * @param {init} scroll
     * @return
     */
    _moveTo(scroll) {
      if (this.type === 'infinite') {
        scroll = this._normalizeScroll(scroll)
      }
      this.elems.circleList.style.transform = `translate3d(0, 0, ${-this.radius}px) rotateX(${
        this.itemAngle * scroll
      }deg)`
      this.elems.highlightList.style.transform = `translate3d(0, ${-scroll * this.itemHeight}px, 0)`
      ;[...this.elems.circleItems].forEach((itemElem) => {
        if (Math.abs(itemElem.dataset.index - scroll) > this.quarterCount) {
          itemElem.style.visibility = 'hidden'
        } else {
          itemElem.style.visibility = 'visible'
        }
      })
      return scroll
    }

    /**
     * @param {init} initV
     */
    async _animateMoveByInitV(initV) {
      let initScroll
      let finalScroll
      let finalV

      let totalScrollLen
      let a
      let t

      if (this.type === 'normal') {
        if (this.scroll < 0 || this.scroll > this.source.length - 1) {
          a = this.exceedA
          initScroll = this.scroll
          finalScroll = this.scroll < 0 ? 0 : this.source.length - 1
          totalScrollLen = initScroll - finalScroll

          t = Math.sqrt(Math.abs(totalScrollLen / a))
          initV = a * t
          initV = this.scroll > 0 ? -initV : initV
          finalV = 0
          await this._animateToScroll(initScroll, finalScroll, t)
        } else {
          initScroll = this.scroll
          a = initV > 0 ? -this.a : this.a
          t = Math.abs(initV / a)
          totalScrollLen = initV * t + (a * t * t) / 2
          finalScroll = Math.round(this.scroll + totalScrollLen)
          finalScroll =
            finalScroll < 0 ? 0 : finalScroll > this.source.length - 1 ? this.source.length - 1 : finalScroll

          totalScrollLen = finalScroll - initScroll
          t = Math.sqrt(Math.abs(totalScrollLen / a))
          await this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart')
        }
      } else {
        initScroll = this.scroll

        a = initV > 0 ? -this.a : this.a
        t = Math.abs(initV / a)
        totalScrollLen = initV * t + (a * t * t) / 2
        finalScroll = Math.round(this.scroll + totalScrollLen)
        await this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart')
      }

      // await this._animateToScroll(this.scroll, finalScroll, initV, 0);

      this._selectByScroll(this.scroll)
    }

    _animateToScroll(initScroll, finalScroll, t, easingName = 'easeOutQuart') {
      if (initScroll === finalScroll || t === 0) {
        this._moveTo(initScroll)
        return
      }

      let start = new Date().getTime() / 1000
      let pass = 0
      let totalScrollLen = finalScroll - initScroll

      // console.log(initScroll, finalScroll, initV, finalV, a);
      return new Promise((resolve, reject) => {
        this.moving = true
        let tick = () => {
          pass = new Date().getTime() / 1000 - start

          if (pass < t) {
            this.scroll = this._moveTo(initScroll + easing[easingName](pass / t) * totalScrollLen)
            this.moveT = requestAnimationFrame(tick)
          } else {
            resolve()
            this._stop()
            this.scroll = this._moveTo(initScroll + totalScrollLen)
          }
        }
        tick()
      })
    }

    _stop() {
      this.moving = false
      cancelAnimationFrame(this.moveT)
    }

    _selectByScroll(scroll) {
      scroll = this._normalizeScroll(scroll) | 0
      if (scroll > this.source.length - 1) {
        scroll = this.source.length - 1
        this._moveTo(scroll)
      }
      this._moveTo(scroll)
      this.scroll = scroll
      this.selected = this.source[scroll]
      this.value = this.selected.value
      this.onChange && this.onChange(this.selected)
    }

    updateSource(source) {
      this._create(source)

      if (!this.moving) {
        this._selectByScroll(this.scroll)
      }
    }

    select(value, useTransition) {
      for (let i = 0; i < this.source.length; i++) {
        if (this.source[i].value === value) {
          window.cancelAnimationFrame(this.moveT)
          // this.scroll = this._moveTo(i);
          let initScroll = this._normalizeScroll(this.scroll)
          let finalScroll = i
          let t = Math.sqrt(Math.abs((finalScroll - initScroll) / this.a))
          this._animateToScroll(initScroll, finalScroll, useTransition ? t : 0)
          setTimeout(() => this._selectByScroll(i))
          return
        }
      }
      throw new Error(`can not select value: ${value}, ${value} match nothing in current source`)
    }

    destroy() {
      this._stop()
      for (let eventName in this.events) {
        this.elems.el.removeEventListener('eventName', this.events[eventName])
      }
      document.removeEventListener('mousedown', this.events['touchstart'])
      document.removeEventListener('mousemove', this.events['touchmove'])
      document.removeEventListener('mouseup', this.events['touchend'])
      this.elems.el.innerHTML = ''
      this.elems = null
    }
  }

  // date logic

  function getYears() {
    let currentYear = new Date().getFullYear()
    let years = []

    for (let i = currentYear - 64; i < currentYear + 1; i++) {
      years.push({
        value: i,
        text: i,
      })
    }
    return years
  }

  function getMonths(year) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    let months = []
    for (let i = 1; i <= 12; i++) {
      months.push({
        value: i,
        text: monthNames[i - 1],
      })
    }
    return months
  }

  function getDays(year, month) {
    let dayCount = new Date(year, month, 0).getDate()
    let days = []

    for (let i = 1; i <= dayCount; i++) {
      days.push({
        value: i,
        text: i,
      })
    }

    return days
  }

  let currentYear = new Date().getFullYear()
  let currentMonth = 1
  let currentDay = 1

  let yearSelector
  let monthSelector
  let daySelector

  let yearSource = getYears()
  let monthSource = getMonths()
  let daySource = getDays(currentYear, currentMonth)

  yearSelector = new IosSelector({
    el: '#year1',
    type: 'infinite',
    source: yearSource,
    count: 20,
    onChange: (selected) => {
      currentYear = selected.value
      daySource = getDays(currentYear, currentMonth)
      daySelector.updateSource(daySource)
      setData(yearSelector.value, monthSelector.value, daySelector.value)
    },
  })

  monthSelector = new IosSelector({
    el: '#month1',
    type: 'infinite',
    source: monthSource,
    count: 20,
    onChange: (selected) => {
      currentMonth = selected.value
      daySource = getDays(currentYear, currentMonth)
      daySelector.updateSource(daySource)
      setData(yearSelector.value, monthSelector.value, daySelector.value)
    },
  })

  daySelector = new IosSelector({
    el: '#day1',
    type: 'infinite',
    source: [],
    count: 20,
    onChange: (selected) => {
      currentDay = selected.value
      setData(yearSelector.value, monthSelector.value, daySelector.value)
    },
  })

  let now = new Date()

  setTimeout(function () {
    yearSelector.select(1990, false)
    /*   monthSelector.select(now.getMonth() + 1)
    daySelector.select(now.getDate()) */
  })
})
</script>

<template>
  <div class="date-selector">
    <div class="month" id="month1"></div>
    <div class="day" id="day1"></div>
    <div class="year" id="year1"></div>
  </div>
</template>

<style lang="scss">
.select-wrap {
  position: relative;
  height: 100%;
  text-align: center;
  overflow: hidden;
  font-size: 20px;
  color: #ddd;

  &:before,
  &:after {
    position: absolute;
    z-index: 1;
    display: block;
    content: '';
    width: 100%;
    height: 10%;
  }

  /*   &:before {
    top: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 100%);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(180deg, #fef5f9 0%, rgba(254, 245, 249, 0) 51%, #fef5f9 100%);
  } */

  .select-options {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    transform-style: preserve-3d;
    margin: 0 auto;
    display: block;
    transform: translateZ(-150px) rotateX(0deg);
    -webkit-font-smoothing: subpixel-antialiased;
    color: var(--c-black);

    .select-option {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;

      -webkit-font-smoothing: subpixel-antialiased;
      @for $i from 1 through 100 {
        &:nth-child(#{$i}) {
          transform: rotateX(-18deg * ($i - 1)) translateZ(150px);
        }
      }
    }
  }
}

.highlight {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  background: var(--c-white);
  border-top: 1px solid var(--c-title);
  border-bottom: 1px solid var(--c-title);
  font-size: 24px;
  font-weight: 700;
  overflow: hidden;
  color: var(--c-title);
}

.highlight-list {
  position: absolute;
  width: 100%;
}

/* date */
.date-selector {
  position: relative;
  perspective: 2000px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  width: 100%;
  height: 280px;

  > div {
    flex: 1;
    position: relative;

    &:not(:last-child) {
      &:before {
        content: '';
        width: 1px;
        height: 100%;
        display: block;
        background: linear-gradient(270deg, #2d2d2d 0%, #fef5f9 100%);
        opacity: 0.1;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  .select-wrap {
    font-size: 16px;
  }

  .highlight {
    font-size: 18px;
  }
}
</style>

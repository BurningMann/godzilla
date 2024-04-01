import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => ({
    fullScreenPage: false,
    currentStep: 0,
    currentStepData: null,
    appData: {
      gender: null,
      relationship: null,
      relationshipType: '',
      aim: null,
      date_of_birth: null,
      time_of_birth: null,
      time_were_you_born: null,
      where_were_you_born: null,
      do_you_enjoy_spending_time_alone: null,

      sign: null,
      partner_sign: null,

      user_history: null,
      user_talants_and_carrer: null,
      basic_data_questions: null,

      past_relationship_analyze: null,
      current_relationship_analyze: null,
      future_relationships_expectations: null,
      motivationing_future: null,

      email: '',
    },

    stepInfoData: {
      sectionsCount: 0,
      currentSection: 0,
      stepCount: 0,
      currentStep: 0,
      startStep: 0,
    },

    signList: {
      virgo: {
        name: 'Virgo',
        image: 'virgo.png',
        element: 'Earth',
        planet: 'Mercury',
        modality: 'Mutable',
        personality: {
          Male: 'Virgo men are highly intellectual, as they are deep thinkers and articulate speakers. Also, they have an inner confidence which means that they aren’t overly concerned about what other people think, and always pursue their own unique interests. But, while they would never let someone else’s opinion dent their confidence, they are their own worst critics. Ambitious and perfectionists, reality always seems to fall short of their expectations. Virgo men are constant self-improvers, and they also love reinventing themselves. There is nothing they like more than starting something new, as it means that they have an opportunity to start fresh, without the burden of any previous mistakes. They are determined and hardworking, and also love to track their progress. If you don’t track it, did it even ever really happen?',
          Female:
            'Earthy Virgo women are highly self-aware. They know just how smart, talented and hardworking they are, which gives them the confidence to pursue their dreams. However, they are also very aware of their failings. Also, perfectionists, even the tiniest problem is an enormous failing in their eyes. But Virgo doesn’t let this hold her back. Instead, it is fuel for the fire and encourages her to work even harder. Virgo women are highly independent, and follow their own moral compass and instincts, without worrying about what everyone else is up to. What she is really looking for is a person in life. She is not satisfied with just living, she always needs a goal to pursue or a higher purpose to give her meaning. She doesn’t like to be idle or waste time. If you want something to do, give it to a Virgo woman. She has a deep sense of responsibility and when she gives her word she keeps it.',
        },
      },
      taurus: {
        name: 'Taurus',
        image: 'taurus.png',
        element: 'Earth',
        planet: 'Venus',
        modality: 'Fixed',
        personality: {
          Male: 'A typical Taurus trait is how they always seem like they have it all together, the career, the home, the car. They are very focussed on building the life that they want, which tends to be something stable and secure. He believes that the best way to get the life is through hard work and incremental improvement. He prefers sticking to a routine that works rather than taking risks. One of the Earth signs, Taurus men can seem like a calm force while the world around them is in turmoil. This is because these men think the big picture, so they can put the little setbacks into a broader context.',
          Female:
            'A typical Taurus trait mostly keenly seen in women is thorough organisation and planning. They have a vision for their perfect wedding, have decided the perfect age for them to have their children, and have already picked out the right schools. But these aren’t just dreams for Taurus, she is willing to put in the work, over the long-term, to make this vision into a reality. She has a work ethic of slow and steady wins the race. While Taurus women would love to be stay-at-home parents with time to support the charities that they are passionate about, these women don’t like to be overly dependent on others and prefer to have their own independent income. This is useful because they also appreciate good quality, and believe in paying a little bit more to get quality that lasts.',
        },
      },
      scorpio: {
        name: 'Scorpio',
        image: 'scorpio.png',
        element: 'Water',
        planet: 'Mars',
        modality: 'Fixed',
        personality: {
          Male: 'Scorpio men know exactly who they are. They have very fixed opinions about everything, and it is almost impossible to change their opinions about anything. They also relish a good argument about politics or religion, and consider nothing taboo. These men are headstrong and have a deep desire to control absolutely everything in their lives. Scorpio guys don’t like surprises or being left unprepared. Their unwillingness to bend to the opinions of others can make them seem a little bit arrogant. Scorpio men have an incredibly hard exterior, and you might believe that it is impossible to hurt their feelings. But this steel armor covers a soft interior and they are actually incredibly sensitive. Once their trust has been broken, they are unforgiving, and if a Scorpio man doesn’t like you, their sharp tongue means that you will know about it.',
          Female:
            'Scorpio women have a very clear vision of themselves and what they want for their lives. Nothing will turn their heads from this path, and they are in control of exactly where they are going. Their determination and single-mindedness can make them seem like they are hard people, especially when combined with their sharp tongue. But nothing could be further than the truth. They are deeply sensitive, but they have learned to keep those parts of themselves to themselves as protection. Scorpio women tend to be secretive and don’t like other people to know what they are up to. But at the same time, they like to know everything about everyone and are often snooping and gossiping. This is because they believe in evidence-based assessments and rational decision making, so they need to know as much as they can in order to make the best possible decisions.',
        },
      },
      sagittarius: {
        name: 'Sagittarius',
        image: 'sagittarius.png',
        element: 'Fire',
        planet: 'Jupiter',
        modality: 'Mutable',
        personality: {
          Male: `One of the fire signs, Sagittarius men have a lust for life and desire to live to the max. One of the mutable signs, their idea of living is having as many different experiences as possible.
          As such, you will rarely find these adventurers in the same spot for long as they are always traveling or learning something new. This teaches them that life is about the journey, and not to be afraid to make mistakes, as tomorrow is always a new day. Sagittarius men can be paranoid when it comes to commitment and will actively avoid anything that ties them down. This includes relationships, mortgages and long-term work contracts. Real or not, they don’t like to appear like they are being tied down. For these men, life is too short to hold a grudge or take offense, so they are both easy going and forgiving.`,
          Female:
            'Sagittarius women are keen to make the most of every moment and every opportunity on offer. You will rarely find them sitting still as they are busy saying yes to every possibility. You will never find them in the same place for long as they are obsessed with the new, and the idea that they can only grow as individuals with new experiences. They don’t really see the value of expanding themselves by going deep in one area. They prefer to try a bit of everything. Sagittarius women are constantly reinventing themselves. They enjoy trying a dramatic new haircut or completely changing their wardrobe. These women are good at adapting to whatever they need to be for the challenge that is in front of them. They quite enjoy playing a role. But they are never false.',
        },
      },
      pisces: {
        name: 'Pisces',
        image: 'pisces.png',
        element: 'Water',
        planet: 'Neptune',
        modality: 'Mutable',
        personality: {
          Male: 'Pisces men prefer to travel with their pack. They are the kind of men that have a group of close friends that tend to do everything together. He also probably visits his family more regularly than most. He doesn’t really like to be alone, he prefers to share his time and interests with others. A Pisces man can get frustrated when he is forced to spend a long period of time in isolation. Pisces men aren’t leaders, but rather prefer to be at the center of the pack, and like to know what is happening with everyone. They do like to be the center of attention, and will sometimes do quite strange things in order to ensure that they get the attention they desire.',
          Female:
            'Pisces women are highly social animals and always have a big group of friends. Some are people they have been close with since childhood, others are people they met last week. Their genuine, curious and empathetic nature means that they bond with new people very quickly. This is also fuelled by the fact that they crave the attention of others, and will do almost anything to get it. They can sometimes do quite bizarre things to make sure that the focus is on them. Deeply empathetic, Pisces women are always finding people and causes to care about. They often adopt animals off the street or throw themselves into charity activities. They can seem a little holier than thou to those that don’t understand their genuinely caring nature.',
        },
      },
      libra: {
        name: 'Libra',
        image: 'libra.png',
        element: 'Air',
        planet: 'Venus',
        modality: 'Cardinal',
        personality: {
          Male: 'Libra men thrive off the energy of others, and so they work hard to surround themselves with a pack of people that are important to them. They have no problems making new friends as they are excellent at reading people, and putting themselves in someone else’s shoes and really understanding where they are coming from. They often also have idols, and like to emulate the people that they respect the most. Libra’s strong sense of empathy means that they also have a strong sense of justice, and they can’t stand by when they see someone being treated poorly. They are, however, less likely to stick up for themselves as they will do almost anything to avoid conflict and keep the peace. For similar reasons, they can often sit on the fence with some issues, so as not to offend anyone.',
          Female:
            'Libra women are community builders and truly believe in the ideal of all for one and one for all. They think that the strong should protect the weak and that everyone should play by the same rules for common benefit. They are deeply empathetic, and are truly able to understand things from the perspectives of others. This means that they form strong friendships quickly. Libra women are innately social animals and thrive off the energy of being around others. For this reason, they are rarely alone, and they are largely defined by the people that are closest to them. They are peacekeepers and they are always looking for the best way to keep everyone happy. While they will always stand up for someone they need, they will do whatever it takes to avoid conflict in their own lives.',
        },
      },
      leo: {
        name: 'Leo',
        image: 'leo.png',
        element: 'Fire',
        planet: 'Sun',
        modality: 'Fixed',
        personality: {
          Male: 'One of the fire signs, Leo men burn brightly with confidence and charisma. Ambitious, these men always like to be at the front, the leader of the pack. They can prioritize style over substance when it comes to what it takes to get there, but their larger than life personality and gumption means that things often work out. They are often taking big risks, in the hope of gaining equally big rewards. Leo not only believes that they can achieve whatever they want in life, but also that they deserve it. So, they can come across as a little self-entitled and self-involved. While it is true that Leos have a lot of self-love, they are also open and generous and appreciate the people in their lives. They like to hog the spotlight, but they can also support others when they choose. They aren’t the type to feel threatened when others shine.',
          Female:
            'One of the fire signs, Leo women have a burning passion for life that is palpable. They have big ideas and big dreams – they are going to be a star in some way or another. They know that being a star starts with looking at acting like a star. For this reason, they always dress to the nines, and walk into a room with the perfect smile and a ton of confidence. They can sometimes prioritize style over substance, but it seems to be working. Leo women are emotionally strong, and there is very little that can shake their belief in themselves, and that they deserve the best in life. As a result, they can sometimes come off as a little self-intitled. But at the same time, they are warm and generous, and that is why people always want to be in her orbit. Leo women certainly have a lot of self-love, but love is not limited, they have plenty left for the people that are important to them.',
        },
      },
      gemini: {
        name: 'Gemini',
        image: 'gemini.png',
        element: 'Air',
        planet: 'Mercury',
        modality: 'Mutable',
        personality: {
          Male: 'Gemini men are fascinated by the world around them and love meeting new people and hearing new stories. They are highly intellectual, and often have a broad knowledge, but their understanding of individual subjects is not always deep, as they are easily distracted and on to the next thing. These men are very social, and their genuine interest in other people means that they are always surrounded by a large group of friends. Belonging to one of the mutable signs, Gemini men are highly adaptable and always find their feet in any situation. They can seem like chameleons, as they have the ability to present a completely different face when needed. But they can also be a little bit flaky. They can forget commitments that they have already made as their attention is caught by the next thing.',
          Female:
            'Gemini women are genuinely interested in the world around them and everyone they meet. They are eclectic in their tastes and find every new story and experience, whether positive or negative, fascinating in some way. They also live to share what they have learned. These women never run out of things to talk about. They are always the life of the party, and others love being around their energy. Gemini women can seem a little shallow because they like to look good and follow the latest trends. Also, their knowledge while wide, isn’t always deep, as they often lose interest before giving themselves the time to become an expert. This same short attention span can also make them unreliable, as it can distract them from following through on things.',
        },
      },
      capricorn: {
        name: 'Capricorn',
        image: 'capricorn.png',
        element: 'Earth',
        planet: 'Saturn',
        modality: 'Cardinal',
        personality: {
          Male: 'Capricorn men have the kind of self-control and self-discipline that others envy. They have no problem sticking to a diet, or saying no to a few nights out in order to save some money. Once they have made a decision, they stick to it. For the same reason, they are highly reliable and can always be taken at their word. This can be quite stressful for them as they tend to overcommit, and beat themselves up if they don’t live up to their own expectations. Capricorn men can be very focused on their own goals and achieving their own dreams. While they are always willing to lend a helping hand to someone else, they struggle to make genuine compromises to their own lives or their own way of doing things for others.',
          Female:
            'Capricorn women tend to be those women you look at and wonder how they do it all. They do it by having the kind of self-control that others envy. They know how to stick to their commitments, when to say yes, and when to say no. There is never a cheat day on her diet, her word is her word. She is always generous and tries to help others, but never promises to anything that she doesn’t think that she can follow through on. Capricorn women tend to be very strict with themselves and live to a strict schedule. They don’t like to compromise from this, and can’t stand it when someone throws a curveball and knocks them off the path that they have chosen for themselves.',
        },
      },
      cancer: {
        name: 'Cancer',
        image: 'cancer.png',
        element: 'Water',
        planet: 'Moon',
        modality: 'Cardinal',
        personality: {
          Male: 'Like all the water signs, Cancer is very in tune with their emotions, and unlike many men, they aren’t afraid to let them float to the surface. Ruled by the Moon, they are also highly intuitive, and they are good at reading people and situations. They trust their gut when it comes to making decisions. They know that they are on the right path, even if they don’t know how they know. Cancer men are defined by the people they are surrounded by, and no one is more important to them than their nearest and dearest. He is probably very close to his parents, is best friends with his siblings, and has many friends who are like siblings. While they are generous when it comes to helping others, they would never want to inconvenience anyone else by asking for help. They may stubbornly struggle alone.',
          Female: `Cancer women often seem like mother hens, as they like to look after everyone around them. Their family and friends are genuinely important to them, and there is nothing they wouldn’t do for the people closest to them. Women born under this sign, with their strong emotions and empathetic nature, also tend to believe strongly in causes and throw their support behind them. One of the Cardinal signs, Cancer women are also very ambitious and have a clear idea of what they want for themselves in life. They are single-minded when it comes to pursuing their goals, and they can get frustrated when things don’t go their way, which can make them appear selfish, despite their innately generous nature. They have a tendency to try and do it all, and do it all alone, which can result in excessive stress.`,
        },
      },
      aries: {
        name: 'Aries',
        image: 'aries.png',
        element: 'Fire',
        planet: 'Mars',
        modality: 'Cardinal',
        personality: {
          Male: `"Ruled by Mars, the God of war, Aries are the warriors of the Zodiac who fight for what they want in life. They don’t expect easy wins, they know that life is a battle. Aries men are the type to burn the candle at both ends. They put in the hours at the office and in the gym, and never miss an opportunity to make new connections and get ahead.
          <br><br>
          One of the Cardinal signs, an Aries trait is how they put themselves first. They like to lead from the front, and they always put their needs and dreams in front of everything else in life. They can have a tendency to tread on others on their way to the top, especially since they are highly competitive. One of the Fire signs, they also have a fiery temper which can ignite when things don’t go their way."`,
          Female:
            'Aries women have big dreams for what they want in life, and firm ideas about who they want to be. But they aren’t just dreamers, they are also doers, and they have a step-by-step plan in place to get from where they are to where they want to be. Ruled by Mars, they see life as a battle, and they are the general. This fiery woman plans to win every skirmish, and eventually the war. A prominent Aries trait is how single-minded they are and how they can have a hot temper when things aren’t going their way. One of the Cardinal signs, they do see themselves as the star around which the rest of the world is revolving. That doesn’t mean that they expect life to be easy, Aries women know that hard work is the way to get ahead, but they won’t let anyone stand in their way.',
        },
      },
      aquarius: {
        name: 'Aquarius',
        image: 'aquarius.png',
        element: 'Air',
        planet: 'Uranus',
        modality: 'Fixed',
        personality: {
          Male: 'Men born under the sign of Aquarius are supremely confident. They are able to give themselves the love and respect that they need, and do not rely on the approval of other people to measure their self-worth. For this reason, they can sometimes appear on the quiet side. But this is not the case. They just don’t feel the need to perform for anyone else, as they do not crave the approval and attention of others. Just because Aquarius men aren’t always talking doesn’t mean that they are always listening. Highly intellectual individuals, they have a tendency to think that they are always right. They often don’t really listen to the opinions of other people, having already made up their own minds.',
          Female:
            'Aquarius women are often understated, which means that they can seem a bit shy and quiet. But this is far from the case, they are usually eccentric and deeply passionate about the things in their life. But their own company and approval are usually all they need, so they don’t occupy themselves putting on a show for others. As a result, they can seem a bit secretive, and even the people closest to them don’t know them as well as they could. Aquarius women tend to be very opinionated and very fixed in their opinions. They also aren’t afraid to share those opinions and can sometimes come across as a little preachy. They find it difficult to really listen to the point of view of other people, as deep down they think that they are right.',
        },
      },
    },
  }),

  getters: {},

  actions: {},
})

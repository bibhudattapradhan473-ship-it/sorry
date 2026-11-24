/**
 * A LITTLE WORLD OF SORRY ❤️
 * Central Configuration File
 * 
 * You can easily customize any text, message, photo, or music path here!
 * Everything updates across the entire website automatically.
 */

const CONFIG = {
  // Couple Identity
  recipientName: "Itu",
  senderName: "Bubu",
  websiteTitle: "A Little World of Sorry ❤️",

  // Audio Configuration
  music: {
    path: "assets/audio/love.mp3.mp3",
    title: "A Gentle Melody For Itu",
    defaultVolume: 0.5,
    autoPrompt: true
  },

  // Chapter 01 — Magical Welcome
  welcome: {
    heading: "Hey, My Favourite Person...",
    subheading: "I made a little something for you, Itu.",
    supportingMessage: "Sometimes words are not enough, but I still want to try.",
    buttonText: "Open My Little Surprise ❤️"
  },

  // Chapter 02 — The Big Sorry
  bigSorry: {
    heading: "I'm Really Sorry, My Love.",
    badge: "Straight From My Heart",
    messageParagraphs: [
      "My love, I know that sometimes my actions or words may hurt you, and I never want to take your feelings lightly.",
      "I may not always get everything right, but I want you to know that your feelings matter to me.",
      "I'm genuinely sorry for the moments when I made you feel upset.",
      "I don't want to simply say sorry and move on. I want to understand, learn and do better."
    ],
    buttonText: "There's More I Want To Say..."
  },

  // Chapter 03 — 50 Little Sorry Notes
  notesSection: {
    heading: "50 Little Notes, One Big Sorry.",
    subheading: "Because one sorry doesn't always express everything I feel.",
    filterTags: ["All", "Understanding", "Regret", "Affection", "Patience", "Promises"]
  },

  // 50 Unique, Thoughtful, Romantic Apology Notes
  notes: [
    {
      id: 1,
      tag: "Regret",
      title: "When I spoke without thinking",
      excerpt: "I wish I could catch words before they fall...",
      content: "I'm sorry for those careless moments when I spoke quickly instead of thinking gently. Your heart is too precious for reckless words, and I promise to be much more mindful with how I speak to you.",
      color: "#FFF5F7",
      rotation: -2
    },
    {
      id: 2,
      tag: "Understanding",
      title: "Your feelings are always valid",
      excerpt: "Even when I didn't get it right away...",
      content: "I never want to dismiss or minimize what you feel. You have every right to feel hurt or upset, and my job as your boyfriend is to listen with patience, not to defend myself.",
      color: "#FDF8F3",
      rotation: 1.5
    },
    {
      id: 3,
      tag: "Affection",
      title: "You are my safest place",
      excerpt: "Hurting you feels like breaking my own sanctuary...",
      content: "You've given me so much warmth and love. The thought that I caused sadness to the one person who brings me peace breaks my heart. I love you deeply, Itu.",
      color: "#F8F4FD",
      rotation: -1
    },
    {
      id: 4,
      tag: "Patience",
      title: "Learning to pause",
      excerpt: "Pausing before reacting is my promise...",
      content: "I am learning that in moments of tension, what matters most is not being right—it's holding your hand and making sure you feel understood and cherished.",
      color: "#FFF7ED",
      rotation: 2.2
    },
    {
      id: 5,
      tag: "Promises",
      title: "Being more attentive",
      excerpt: "Noticing the little sighs and quiet pauses...",
      content: "I'm sorry for the times I was distracted or caught up in my own head. You deserve my full presence, my attention, and my open ears whenever you talk to me.",
      color: "#F2F8F6",
      rotation: -2.5
    },
    {
      id: 6,
      tag: "Regret",
      title: "For taking your smile for granted",
      excerpt: "Your smile is my greatest treasure...",
      content: "Seeing you quiet or upset because of something I did makes the whole world feel grey. I never want to be the reason behind tears or heavy sighs on your face.",
      color: "#FFF5F7",
      rotation: 1
    },
    {
      id: 7,
      tag: "Understanding",
      title: "Listening without arguing",
      excerpt: "Listening to understand, not to answer back...",
      content: "I'm sorry when I reacted defensively instead of simply holding space for your feelings. I want you to feel heard, validated, and held with care.",
      color: "#FDF8F3",
      rotation: -1.8
    },
    {
      id: 8,
      tag: "Affection",
      title: "I appreciate your patience with me",
      excerpt: "You have been so sweet and patient...",
      content: "Thank you for the grace and kindness you show me even when I fall short. It makes me want to grow into the best boyfriend you could ever ask for.",
      color: "#F8F4FD",
      rotation: 2
    },
    {
      id: 9,
      tag: "Promises",
      title: "To protect your peace",
      excerpt: "Your heart deserves absolute gentleness...",
      content: "The world can be stressful enough on its own; our relationship should always be your warm refuge. I promise to protect your peace and comfort.",
      color: "#FFF7ED",
      rotation: -0.8
    },
    {
      id: 10,
      tag: "Regret",
      title: "Misunderstandings that lingered",
      excerpt: "I'm sorry I didn't reach out sooner...",
      content: "I hate letting silence hang between us. I am sorry for any delay in apologizing or reaching out. Every second without your warmth feels terribly cold.",
      color: "#F2F8F6",
      rotation: 1.6
    },
    {
      id: 11,
      tag: "Understanding",
      title: "Remembering how delicate emotions are",
      excerpt: "Handling your heart with soft hands...",
      content: "Sometimes I act clumsy with words, forgetting how deeply things can sting. I am learning to treat every conversation between us with tenderness.",
      color: "#FFF5F7",
      rotation: -2.1
    },
    {
      id: 12,
      tag: "Affection",
      title: "The warmth of your laughter",
      excerpt: "It's my favourite sound in the world...",
      content: "There's nothing sweeter than hearing you laugh freely. I'm sorry for any gloom I brought into your day, and I want to spend every day earning that laughter back.",
      color: "#FDF8F3",
      rotation: 0.9
    },
    {
      id: 13,
      tag: "Patience",
      title: "Giving you space when you need it",
      excerpt: "Respecting your pace without rushing you...",
      content: "I understand that healing and feeling okay isn't an instant switch. I will stay here gently, giving you whatever time you need, without rushing you.",
      color: "#F8F4FD",
      rotation: -1.4
    },
    {
      id: 14,
      tag: "Promises",
      title: "Clear and open communication",
      excerpt: "No assumptions, just honest honesty...",
      content: "I promise to share my thoughts more clearly and to ask about yours instead of assuming. We are a team, and you are my most treasured teammate.",
      color: "#FFF7ED",
      rotation: 2.4
    },
    {
      id: 15,
      tag: "Regret",
      title: "For not checking on you enough",
      excerpt: "Did you eat? Did you rest well?...",
      content: "I'm sorry for the days when I should have asked how your heart was feeling before diving into daily chaos. You are always my priority.",
      color: "#F2F8F6",
      rotation: -1.2
    },
    {
      id: 16,
      tag: "Understanding",
      title: "Even when we see things differently",
      excerpt: "Your perspective is always worth cherishing...",
      content: "We are two different people who chose to love each other. I'm sorry when I forgot to look at things through your loving eyes. I respect your view always.",
      color: "#FFF5F7",
      rotation: 1.7
    },
    {
      id: 17,
      tag: "Affection",
      title: "How proud I am to be yours",
      excerpt: "Being loved by you is an honor...",
      content: "You are smart, beautiful, compassionate, and extraordinary. I feel so lucky to hold your hand, and I never want to make you doubt how much you are cherished.",
      color: "#FDF8F3",
      rotation: -2.3
    },
    {
      id: 18,
      tag: "Patience",
      title: "A softer tone in difficult moments",
      excerpt: "Soft voices make hearts feel safe...",
      content: "I'm sorry if my tone ever felt sharp, impatient, or cold. I want my voice to always sound like home and safety to you, especially when things get tough.",
      color: "#F8F4FD",
      rotation: 0.5
    },
    {
      id: 19,
      tag: "Promises",
      title: "Little daily efforts",
      excerpt: "Love is in the smallest consistent acts...",
      content: "Saying sorry is only the first step; showing you love through consistent, thoughtful actions every day is what I commit to doing for you, Itu.",
      color: "#FFF7ED",
      rotation: -1.9
    },
    {
      id: 20,
      tag: "Regret",
      title: "Any time I made you feel alone",
      excerpt: "You should never feel lonely with me...",
      content: "Even when in the same room or on the same call, emotional distance hurts. I'm sorry for any moment I made you feel unheard or alone.",
      color: "#F2F8F6",
      rotation: 2.1
    },
    {
      id: 21,
      tag: "Understanding",
      title: "Validating your boundaries",
      excerpt: "Your comfort line is sacred...",
      content: "I respect what makes you comfortable and what doesn't. I'm sorry if I crossed any lines or pushed when you wanted stillness. Your boundaries will always be respected.",
      color: "#FFF5F7",
      rotation: -0.7
    },
    {
      id: 22,
      tag: "Affection",
      title: "Those gentle forehead kisses",
      excerpt: "Missing the sweetest little moments...",
      content: "I miss the calm moments when everything was quiet and I could just kiss your forehead and tell you how lucky I am. I promise to bring those moments back.",
      color: "#FDF8F3",
      rotation: 1.3
    },
    {
      id: 23,
      tag: "Patience",
      title: "Never brushing off small issues",
      excerpt: "If it hurts you, it is never small...",
      content: "I'm sorry if I ever called something 'a small thing'. If it affects your heart or causes you worry, it matters to me just as much.",
      color: "#F8F4FD",
      rotation: -2.6
    },
    {
      id: 24,
      tag: "Promises",
      title: "To never stop learning you",
      excerpt: "Your heart is a world I want to keep learning...",
      content: "You evolve, your dreams grow, and your thoughts change. I promise to keep learning who you are each day with genuine curiosity and deep love.",
      color: "#FFF7ED",
      rotation: 1.8
    },
    {
      id: 25,
      tag: "Regret",
      title: "Stubbornness on my part",
      excerpt: "Ego has no place in our love story...",
      content: "I am sorry for moments when my ego or pride got in the way of simply loving you. There is nothing in this world more important to me than you and me.",
      color: "#F2F8F6",
      rotation: -1.5
    },
    {
      id: 26,
      tag: "Understanding",
      title: "Holding your worries gently",
      excerpt: "Whenever you feel overwhelmed...",
      content: "I want to be the person you lean on when life gets heavy, not another source of stress. I'm sorry for adding to your burdens instead of lifting them.",
      color: "#FFF5F7",
      rotation: 2
    },
    {
      id: 27,
      tag: "Affection",
      title: "The way you care so deeply",
      excerpt: "Your empathy is one of your greatest gifts...",
      content: "You have such a kind and empathetic heart. It hurts me that I bruised the sweetest heart I know. I want to treasure and protect your tenderness.",
      color: "#FDF8F3",
      rotation: -1.1
    },
    {
      id: 28,
      tag: "Patience",
      title: "Calm over chaos",
      excerpt: "Breathing together when things get tangled...",
      content: "Whenever we hit a misunderstanding, I want us to take a deep breath together. I'm sorry for letting tension rise when warmth was what we needed.",
      color: "#F8F4FD",
      rotation: 0.8
    },
    {
      id: 29,
      tag: "Promises",
      title: "Reassurance when doubt creeps in",
      excerpt: "I will never get tired of reminding you...",
      content: "Whenever you feel insecure, uncertain, or hurt, I will remind you again and again: you are loved, you are chosen, and you are my whole world.",
      color: "#FFF7ED",
      rotation: -2.4
    },
    {
      id: 30,
      tag: "Regret",
      title: "Misplaced priorities in the moment",
      excerpt: "Nothing comes before your peace...",
      content: "I'm sorry if my schedule, work, or trivial tasks made you feel secondary. You are the center of my life and I will make sure my actions prove it.",
      color: "#F2F8F6",
      rotation: 1.4
    },
    {
      id: 31,
      tag: "Understanding",
      title: "When you go quiet",
      excerpt: "Understanding the silence behind your words...",
      content: "I'm learning to understand your silence and not assume everything is fine. I want to sit gently beside you and let you know it's safe to open up.",
      color: "#FFF5F7",
      rotation: -1.3
    },
    {
      id: 32,
      tag: "Affection",
      title: "Your adorable quirks",
      excerpt: "Every little thing about you is lovely...",
      content: "The way you talk, the way you scrunch your nose, the things that make you smile—I love every single detail about you, Itu. Never forget how special you are.",
      color: "#FDF8F3",
      rotation: 2.5
    },
    {
      id: 33,
      tag: "Patience",
      title: "No expired apologies",
      excerpt: "I mean this today, tomorrow, and always...",
      content: "This apology isn't just for today. It's an ongoing promise to be gentler, more compassionate, and more loving every single day we share.",
      color: "#F8F4FD",
      rotation: -1.7
    },
    {
      id: 34,
      tag: "Promises",
      title: "Creating happier days ahead",
      excerpt: "So many sweet moments waiting for us...",
      content: "I want to fill our future with cozy dates, silly jokes, long walks, and soft conversations. I promise to work hard to make you smile again.",
      color: "#FFF7ED",
      rotation: 1.1
    },
    {
      id: 35,
      tag: "Regret",
      title: "Not noticing you were tired",
      excerpt: "You give so much of yourself...",
      content: "I'm sorry for asking for attention or reacting when you were already drained and exhausted. You deserve comfort and pampering, not added demands.",
      color: "#F2F8F6",
      rotation: -2.2
    },
    {
      id: 36,
      tag: "Understanding",
      title: "Remembering we are on the same side",
      excerpt: "It's not you vs me, it's us vs the problem...",
      content: "Whenever we disagree, it's never about winning. I'm on your team forever. I'm sorry for moments when my behavior forgot that beautiful truth.",
      color: "#FFF5F7",
      rotation: 1.9
    },
    {
      id: 37,
      tag: "Affection",
      title: "Holding your hand in my mind",
      excerpt: "Even when physically apart...",
      content: "Even when there is distance or tension between us, my heart is holding yours tight. You are woven into every part of my days and dreams.",
      color: "#FDF8F3",
      rotation: -0.6
    },
    {
      id: 38,
      tag: "Patience",
      title: "Giving you my full sincerity",
      excerpt: "No half-hearted words...",
      content: "I didn't make this website just as a quick fix. I built it so you can see that every thought, every word, and every apology comes from the deepest corner of my heart.",
      color: "#F8F4FD",
      rotation: 2.3
    },
    {
      id: 39,
      tag: "Promises",
      title: "Being your calm in the storm",
      excerpt: "A steady shoulder you can always trust...",
      content: "I promise to be steady, reliable, and gentle. When storms brew, you can always rest your head on me knowing I'll keep you safe and cherished.",
      color: "#FFF7ED",
      rotation: -1.6
    },
    {
      id: 40,
      tag: "Regret",
      title: "Making you second-guess my feelings",
      excerpt: "You should never have to question my love...",
      content: "If anything I did ever made you wonder if I care, I am so sorry. My love for you is deep, unwavering, and true. You never have to doubt it.",
      color: "#F2F8F6",
      rotation: 1.5
    },
    {
      id: 41,
      tag: "Understanding",
      title: "Loving the whole you",
      excerpt: "In your quiet moments and happy moments...",
      content: "I love you on sunny days and cloudy days alike. I don't just love you when things are easy; I love you completely, through every mood and every season.",
      color: "#FFF5F7",
      rotation: -2.7
    },
    {
      id: 42,
      tag: "Affection",
      title: "My favorite notification",
      excerpt: "Your name on my screen always brightens my day...",
      content: "Seeing your name pop up on my phone is always my favorite highlight. I'm sorry for any moments I didn't treat that connection with the enthusiasm it deserves.",
      color: "#FDF8F3",
      rotation: 0.7
    },
    {
      id: 43,
      tag: "Patience",
      title: "Ready to listen whenever you're ready",
      excerpt: "No pressure, just an open heart...",
      content: "Whenever you feel ready to speak, whether today, tomorrow, or later, I am right here waiting with an open heart and two attentive ears.",
      color: "#F8F4FD",
      rotation: -1.1
    },
    {
      id: 44,
      tag: "Promises",
      title: "Remembering what makes you feel special",
      excerpt: "Little surprises and sincere appreciation...",
      content: "I promise to keep showing you how special you are, with warm words, little surprises, thoughtful gestures, and genuine care every single week.",
      color: "#FFF7ED",
      rotation: 2.1
    },
    {
      id: 45,
      tag: "Regret",
      title: "Not giving you the reassurance you needed",
      excerpt: "When words of comfort were what you wanted...",
      content: "I'm sorry for times you needed a warm hug or comforting words and I was too clumsy to provide them. I want to be your safe harbor always.",
      color: "#F2F8F6",
      rotation: -1.9
    },
    {
      id: 46,
      tag: "Understanding",
      title: "Growing up together",
      excerpt: "Every mistake is a chance to love better...",
      content: "We are growing and learning how to love each other more beautifully every day. I'm sorry for my stumbles, and I am committed to growing for us.",
      color: "#FFF5F7",
      rotation: 1.2
    },
    {
      id: 47,
      tag: "Affection",
      title: "You make my world so much brighter",
      excerpt: "Before you, everything was so ordinary...",
      content: "You brought color, joy, warmth, and sweetness into my life. I never want my own faults to dim that radiant light you brought to me.",
      color: "#FDF8F3",
      rotation: -2.0
    },
    {
      id: 48,
      tag: "Patience",
      title: "No defenses, just love",
      excerpt: "Dropping all shields for you...",
      content: "I drop every excuse. I'm truly sorry for hurting you. All that matters is your happiness and helping your heart feel light and cherished again.",
      color: "#F8F4FD",
      rotation: 1.6
    },
    {
      id: 49,
      tag: "Promises",
      title: "A promise of tenderness",
      excerpt: "A gentler Bubu for my sweet Itu...",
      content: "I promise to be gentler with your feelings, quicker to say 'I love you', slower to react, and always ready to wrap you in love and understanding.",
      color: "#FFF7ED",
      rotation: -0.9
    },
    {
      id: 50,
      tag: "Affection",
      title: "I love you with all my heart",
      excerpt: "Note fifty, but my love is infinite...",
      content: "Fifty notes cannot hold everything I feel for you. You are my girl, my best friend, my love, and my favorite person in the entire universe. I am so sorry, and I love you endlessly.",
      color: "#FFF0F5",
      rotation: 0
    }
  ],

  // Chapter 04 — Open When... Letters
  openWhenLetters: [
    {
      id: "angry",
      title: "Open When You're Angry",
      badge: "Take a Deep Breath 🌿",
      envelopeColor: "#FCE7F3",
      waxColor: "#E11D48",
      summary: "For when frustration boils over and you feel so mad at me.",
      content: `My dearest Itu,

If you are reading this because you are angry with me, please know: you have every right to feel that way.

I will never tell you to "calm down" or minimize your frustration. If I made you mad, it means I failed to respect your boundaries, your feelings, or your expectations.

I don't want you to swallow your anger or pretend everything is okay. But I do want you to know this: even when you are furious with me, I am never angry with you. I am listening, I am ready to take responsibility, and I will be here when you are ready to let me know how we can fix this.

Drink a glass of water, breathe, and know that you are deeply loved even in this tense moment.

With an open heart,
Your Bubu ❤️`
    },
    {
      id: "sad",
      title: "Open When You're Sad",
      badge: "A Warm Hug For You 🫂",
      envelopeColor: "#E0F2FE",
      waxColor: "#0284C7",
      summary: "For when your heart feels heavy and you need comforting warmth.",
      content: `My sweet Itu,

I wish I could be right beside you right now, pulling you into my arms and letting you rest your head on my chest until the heaviness melts away.

Seeing or knowing you are sad—especially if I had anything to do with it—tears me apart. You carry so much with such quiet grace, but you don't have to carry it all by yourself.

Let the tears flow if they need to. You don't have to be strong right now. I am right here, loving you unconditionally, holding your hand through the gloom. 

Whenever you're ready, let me be your shelter. You are not alone, my love.

Holding you close,
Your Bubu ❤️`
    },
    {
      id: "miss-me",
      title: "Open When You Miss Me",
      badge: "Across Any Distance 🌙",
      envelopeColor: "#F3E8FF",
      waxColor: "#9333EA",
      summary: "For when you wish we were right next to each other.",
      content: `My precious Itu,

Whenever you miss me, close your eyes for just five seconds and take a slow breath. Feel that warmth? That is me thinking of you, just as I do all day long.

No amount of distance or quiet hours can change the fact that my heart belongs entirely to you. I miss your voice, your laugh, the softness of your hands, and the way you look at me when you're happy.

We will have so many more beautiful moments together. Until the next moment I get to hold you, keep this letter close and remember: I miss you even more than you miss me.

Forever longing for you,
Your Bubu ❤️`
    },
    {
      id: "need-smile",
      title: "Open When You Need A Smile",
      badge: "A Little Sparkle ☀️",
      envelopeColor: "#FEF3C7",
      waxColor: "#D97706",
      summary: "For when you need a gentle reminder of how cute and loved you are.",
      content: `Hey beautiful!

Do you have any idea how ridiculously cute you are? Seriously. The little way you laugh when you find something funny, the way your eyes sparkle when you're excited about something, the little face you make when you're concentrating—it's completely unfair how gorgeous you are.

If today has been tough, remember that you are the brightest part of my world. The sun is jealous of your radiance, and I am the luckiest guy alive just to be the one you smile for.

Now give me that sweet smile, Itu! You look breathtaking when you do.

Smiling just thinking of you,
Your Bubu ❤️`
    },
    {
      id: "feel-loved",
      title: "Open When You Want To Feel Loved",
      badge: "Infinite Love ❤️",
      envelopeColor: "#FFE4E6",
      waxColor: "#BE123C",
      summary: "For when you want a reminder of just how deeply and truly you are cherished.",
      content: `My dearest Itu,

If you ever find yourself questioning how much you are loved, let me lay it out clearly and undeniably:

I love you in the quiet mornings and during noisy afternoons. I love you when you are confident and radiant, and I love you just as fiercely when you are vulnerable, exhausted, or upset.

You are not just a part of my life; you have redefined what happiness means to me. Loving you is the easiest, most natural, and most rewarding thing I have ever done.

I will choose you today, tomorrow, and every day that follows. You are my one and only, Itu.

Yours with all my soul,
Your Bubu ❤️`
    }
  ],

  // Chapter 05 — Our Little Memories (Scrapbook Gallery)
  // You can replace these image paths with your real photos (e.g., assets/images/photo1.jpg)
  gallerySection: {
    heading: "Some Moments Are Too Precious To Forget.",
    subheading: "A little scrapbook of memories, laughter, and why you mean everything to me."
  },
  memories: [
    {
      id: 1,
      title: "The Magic of Your Smile",
      date: "A Day I'll Never Forget",
      caption: "Every time you smile at me like this, my whole world stops for a second. (Replace with our favorite photo)",
      image: "assets/images/photo-placeholder-1.svg",
      tag: "Pure Joy",
      rotation: -3
    },
    {
      id: 2,
      title: "Quiet Cozy Conversations",
      date: "Late Night Talks",
      caption: "Talking to you until late at night, sharing dreams and silly secrets. Those moments are my treasure.",
      image: "assets/images/photo-placeholder-2.svg",
      tag: "Our Safe Place",
      rotation: 2.5
    },
    {
      id: 3,
      title: "Walking Hand In Hand",
      date: "Every Walk With You",
      caption: "Your small warm hand inside mine. No matter where we go, as long as it's with you, I'm happy.",
      image: "assets/images/photo-placeholder-3.svg",
      tag: "Together",
      rotation: -1.5
    },
    {
      id: 4,
      title: "That Unforgettable Coffee Date",
      date: "Sweet Afternoon",
      caption: "Sipping our favorite drinks and watching you laugh across the table. Pure perfection.",
      image: "assets/images/photo-placeholder-4.svg",
      tag: "Sweet Memories",
      rotation: 3
    },
    {
      id: 5,
      title: "Sunset Whispers",
      date: "Golden Hour With You",
      caption: "The golden sun on your face, looking more beautiful than any sunset could ever dream of.",
      image: "assets/images/photo-placeholder-5.svg",
      tag: "Golden Moments",
      rotation: -2
    },
    {
      id: 6,
      title: "Looking Forward To Us",
      date: "Our Next Chapter",
      caption: "So many more adventures, trips, hugs, and memories waiting for us ahead. Just you and me.",
      image: "assets/images/photo-placeholder-6.svg",
      tag: "Forever",
      rotation: 1.8
    }
  ],

  // Chapter 06 — A Letter From My Heart
  heartLetter: {
    heading: "Something I Want You To Know...",
    salutation: "My dearest Itu,",
    paragraphs: [
      "I know that saying sorry cannot automatically undo a moment that hurt you.",
      "I don't expect everything to become perfect just because I made this little website.",
      "I simply wanted to take the time to tell you that you matter to me, your feelings matter, and I genuinely want to do better.",
      "Thank you for being a beautiful part of my life.",
      "I'm sorry, my love."
    ],
    closing: "With love,",
    signature: "Your Bubu ❤️"
  },

  // Chapter 07 — The Final Surprise
  finalSurprise: {
    heading: "One Last Thing, My Love...",
    message: "No matter how beautiful this little website looks, what matters most is that I understand your feelings and make an honest effort to do better.",
    question: "Can I make things better, one little step at a time?",
    options: {
      yes: {
        text: "Yes, Let's Talk ❤️",
        badge: "Together Again",
        celebrationHeading: "Thank you for letting me try, my love! ❤️",
        celebrationMessage: "I promise to listen with all my heart, hold you tight, and never take your love for granted. I'm right here whenever you want to call or talk.",
        toast: "A warm hug is on its way to you! 🥰"
      },
      time: {
        text: "I Need A Little Time 🌷",
        badge: "Respecting Your Space",
        respectHeading: "That's completely okay, my love. 🌷",
        respectMessage: "That's okay, my love. Take all the time you need. Your feelings matter, and I'll respect your space. I'll be right here waiting with an open heart whenever you feel ready.",
        toast: "Your peace and comfort come first, always. 🕊️"
      }
    },
    replayText: "Replay Our Little Story ↺"
  }
};

// Export configuration for browser scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

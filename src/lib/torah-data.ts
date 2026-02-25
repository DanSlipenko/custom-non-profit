export const torahVersion = "New International Version (NIV)";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TorahVerse {
  verse: number;
  text: string;
}

export interface TorahChapter {
  chapter: number;
  verses: TorahVerse[];
}

export interface TorahPortion {
  name: string; // Parsha name (e.g. "Bereishit")
  hebrewName: string; // Hebrew name (e.g. "בְּרֵאשִׁית")
  book: string; // Book name (e.g. "Genesis")
  summary: string; // Brief summary of the portion
  chapters: TorahChapter[];
}

// ─── Torah Portions ──────────────────────────────────────────────────────────

export const torahPortions: TorahPortion[] = [
  {
    name: "Bereishit",
    hebrewName: "בְּרֵאשִׁית",
    book: "Genesis",
    summary: "The creation of the world, Adam and Eve, Cain and Abel, and the generations of mankind.",
    chapters: [
      {
        chapter: 1,
        verses: [
          { verse: 1, text: "In the beginning God created the heavens and the earth." },
          {
            verse: 2,
            text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
          },
          { verse: 3, text: 'And God said, "Let there be light," and there was light.' },
          { verse: 4, text: "God saw that the light was good, and he separated the light from the darkness." },
          {
            verse: 5,
            text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning — the first day.',
          },
          { verse: 6, text: 'And God said, "Let there be a vault between the waters to separate water from water."' },
          { verse: 7, text: "So God made the vault and separated the water under the vault from the water above it. And it was so." },
          { verse: 8, text: 'God called the vault "sky." And there was evening, and there was morning — the second day.' },
          {
            verse: 9,
            text: 'And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." And it was so.',
          },
          { verse: 10, text: 'God called the dry ground "land," and the gathered waters he called "seas." And God saw that it was good.' },
          {
            verse: 11,
            text: 'Then God said, "Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds." And it was so.',
          },
          {
            verse: 12,
            text: "The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good.",
          },
          { verse: 13, text: "And there was evening, and there was morning — the third day." },
          {
            verse: 14,
            text: 'And God said, "Let there be lights in the vault of the sky to separate the day from the night, and let them serve as signs to mark sacred times, and days and years."',
          },
          { verse: 15, text: '"And let them be lights in the vault of the sky to give light on the earth." And it was so.' },
          {
            verse: 16,
            text: "God made two great lights — the greater light to govern the day and the lesser light to govern the night. He also made the stars.",
          },
          { verse: 17, text: "God set them in the vault of the sky to give light on the earth," },
          { verse: 18, text: "to govern the day and the night, and to separate light from darkness. And God saw that it was good." },
          { verse: 19, text: "And there was evening, and there was morning — the fourth day." },
          {
            verse: 20,
            text: 'And God said, "Let the water teem with living creatures, and let birds fly above the earth across the vault of the sky."',
          },
          {
            verse: 21,
            text: "So God created the great creatures of the sea and every living thing with which the water teems and that moves about in it, according to their kinds, and every winged bird according to its kind. And God saw that it was good.",
          },
          {
            verse: 22,
            text: 'God blessed them and said, "Be fruitful and increase in number and fill the water in the seas, and let the birds increase on the earth."',
          },
          { verse: 23, text: "And there was evening, and there was morning — the fifth day." },
          {
            verse: 24,
            text: 'And God said, "Let the land produce living creatures according to their kinds: the livestock, the creatures that move along the ground, and the wild animals, each according to its kind." And it was so.',
          },
          {
            verse: 25,
            text: "God made the wild animals according to their kinds, the livestock according to their kinds, and all the creatures that move along the ground according to their kinds. And God saw that it was good.",
          },
          {
            verse: 26,
            text: 'Then God said, "Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground."',
          },
          {
            verse: 27,
            text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
          },
          {
            verse: 28,
            text: 'God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground."',
          },
          {
            verse: 29,
            text: 'Then God said, "I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food."',
          },
          {
            verse: 30,
            text: '"And to all the beasts of the earth and all the birds in the sky and all the creatures that move along the ground — everything that has the breath of life in it — I give every green plant for food." And it was so.',
          },
          {
            verse: 31,
            text: "God saw all that he had made, and it was very good. And there was evening, and there was morning — the sixth day.",
          },
        ],
      },
      {
        chapter: 2,
        verses: [
          { verse: 1, text: "Thus the heavens and the earth were completed in all their vast array." },
          {
            verse: 2,
            text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.",
          },
          {
            verse: 3,
            text: "Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.",
          },
          {
            verse: 4,
            text: "This is the account of the heavens and the earth when they were created, when the LORD God made the earth and the heavens.",
          },
          {
            verse: 5,
            text: "Now no shrub had yet appeared on the earth and no plant had yet sprung up, for the LORD God had not sent rain on the earth and there was no one to work the ground,",
          },
          { verse: 6, text: "but streams came up from the earth and watered the whole surface of the ground." },
          {
            verse: 7,
            text: "Then the LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.",
          },
          { verse: 8, text: "Now the LORD God had planted a garden in the east, in Eden; and there he put the man he had formed." },
          {
            verse: 9,
            text: "The LORD God made all kinds of trees grow out of the ground — trees that were pleasing to the eye and good for food. In the middle of the garden were the tree of life and the tree of the knowledge of good and evil.",
          },
          { verse: 10, text: "A river watering the garden flowed from Eden; from there it was separated into four headwaters." },
        ],
      },
    ],
  },
  {
    name: "Noach",
    hebrewName: "נֹחַ",
    book: "Genesis",
    summary: "The story of Noah, the great flood, the covenant of the rainbow, and the Tower of Babel.",
    chapters: [
      {
        chapter: 6,
        verses: [
          {
            verse: 9,
            text: "This is the account of Noah and his family. Noah was a righteous man, blameless among the people of his time, and he walked faithfully with God.",
          },
          { verse: 10, text: "Noah had three sons: Shem, Ham and Japheth." },
          { verse: 11, text: "Now the earth was corrupt in God's sight and was full of violence." },
          { verse: 12, text: "God saw how corrupt the earth had become, for all the people on earth had corrupted their ways." },
          {
            verse: 13,
            text: 'So God said to Noah, "I am going to put an end to all people, for the earth is filled with violence because of them. I am surely going to destroy both them and the earth."',
          },
          { verse: 14, text: '"So make yourself an ark of cypress wood; make rooms in it and coat it with pitch inside and out."' },
          {
            verse: 15,
            text: '"This is how you are to build it: The ark is to be three hundred cubits long, fifty cubits wide and thirty cubits high."',
          },
          {
            verse: 16,
            text: '"Make a roof for it, leaving below the roof an opening one cubit high all around. Put a door in the side of the ark and make lower, middle and upper decks."',
          },
          {
            verse: 17,
            text: '"I am going to bring floodwaters on the earth to destroy all life under the heavens, every creature that has the breath of life in it. Everything on earth will perish."',
          },
          {
            verse: 18,
            text: '"But I will establish my covenant with you, and you will enter the ark — you and your sons and your wife and your sons\' wives with you."',
          },
          { verse: 19, text: '"You are to bring into the ark two of all living creatures, male and female, to keep them alive with you."' },
          {
            verse: 20,
            text: '"Two of every kind of bird, of every kind of animal and of every kind of creature that moves along the ground will come to you to be kept alive."',
          },
          { verse: 21, text: '"You are to take every kind of food that is to be eaten and store it away as food for you and for them."' },
          { verse: 22, text: "Noah did everything just as God commanded him." },
        ],
      },
      {
        chapter: 9,
        verses: [
          {
            verse: 1,
            text: 'Then God blessed Noah and his sons, saying to them, "Be fruitful and increase in number and fill the earth."',
          },
          { verse: 8, text: "Then God said to Noah and to his sons with him:" },
          { verse: 9, text: '"I now establish my covenant with you and with your descendants after you"' },
          {
            verse: 11,
            text: '"I establish my covenant with you: Never again will all life be destroyed by the waters of a flood; never again will there be a flood to destroy the earth."',
          },
          {
            verse: 12,
            text: 'And God said, "This is the sign of the covenant I am making between me and you and every living creature with you, a covenant for all generations to come:"',
          },
          { verse: 13, text: '"I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth."' },
        ],
      },
    ],
  },
  {
    name: "Lech Lecha",
    hebrewName: "לֶךְ־לְךָ",
    book: "Genesis",
    summary: "God's call to Abram, the journey to Canaan, the covenant between the parts, and the birth of Ishmael.",
    chapters: [
      {
        chapter: 12,
        verses: [
          {
            verse: 1,
            text: 'The LORD had said to Abram, "Go from your country, your people and your father\'s household to the land I will show you."',
          },
          {
            verse: 2,
            text: '"I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing."',
          },
          {
            verse: 3,
            text: '"I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you."',
          },
          {
            verse: 4,
            text: "So Abram went, as the LORD had told him; and Lot went with him. Abram was seventy-five years old when he set out from Harran.",
          },
          {
            verse: 5,
            text: "He took his wife Sarai, his nephew Lot, all the possessions they had accumulated and the people they had acquired in Harran, and they set out for the land of Canaan, and they arrived there.",
          },
          {
            verse: 6,
            text: "Abram traveled through the land as far as the site of the great tree of Moreh at Shechem. At that time the Canaanites were in the land.",
          },
          {
            verse: 7,
            text: 'The LORD appeared to Abram and said, "To your offspring I will give this land." So he built an altar there to the LORD, who had appeared to him.',
          },
          {
            verse: 8,
            text: "From there he went on toward the hills east of Bethel and pitched his tent, with Bethel on the west and Ai on the east. There he built an altar to the LORD and called on the name of the LORD.",
          },
          { verse: 9, text: "Then Abram set out and continued toward the Negev." },
        ],
      },
      {
        chapter: 15,
        verses: [
          {
            verse: 1,
            text: 'After this, the word of the LORD came to Abram in a vision: "Do not be afraid, Abram. I am your shield, your very great reward."',
          },
          {
            verse: 2,
            text: 'But Abram said, "Sovereign LORD, what can you give me since I remain childless and the one who will inherit my estate is Eliezer of Damascus?"',
          },
          { verse: 3, text: 'And Abram said, "You have given me no children; so a servant in my household will be my heir."' },
          {
            verse: 4,
            text: 'Then the word of the LORD came to him: "This man will not be your heir, but a son who is your own flesh and blood will be your heir."',
          },
          {
            verse: 5,
            text: 'He took him outside and said, "Look up at the sky and count the stars — if indeed you can count them." Then he said to him, "So shall your offspring be."',
          },
          { verse: 6, text: "Abram believed the LORD, and he credited it to him as righteousness." },
        ],
      },
    ],
  },
  {
    name: "Shemot",
    hebrewName: "שְׁמוֹת",
    book: "Exodus",
    summary: "The Israelites in Egypt, the birth of Moses, the burning bush, and God's mission to free His people.",
    chapters: [
      {
        chapter: 1,
        verses: [
          { verse: 1, text: "These are the names of the sons of Israel who went to Egypt with Jacob, each with his family:" },
          { verse: 2, text: "Reuben, Simeon, Levi and Judah;" },
          { verse: 3, text: "Issachar, Zebulun and Benjamin;" },
          { verse: 4, text: "Dan and Naphtali; Gad and Asher." },
          { verse: 5, text: "The descendants of Jacob numbered seventy in all; Joseph was already in Egypt." },
          { verse: 6, text: "Now Joseph and all his brothers and all that generation died," },
          {
            verse: 7,
            text: "but the Israelites were exceedingly fruitful; they multiplied greatly, increased in numbers and became so numerous that the land was filled with them.",
          },
          { verse: 8, text: "Then a new king, to whom Joseph meant nothing, came to power in Egypt." },
          { verse: 9, text: '"Look," he said to his people, "the Israelites have become far too numerous for us."' },
          {
            verse: 10,
            text: '"Come, we must deal shrewdly with them or they will become even more numerous and, if war breaks out, will join our enemies, fight against us and leave the country."',
          },
          {
            verse: 11,
            text: "So they put slave masters over them to oppress them with forced labor, and they built Pithom and Rameses as store cities for Pharaoh.",
          },
          {
            verse: 12,
            text: "But the more they were oppressed, the more they multiplied and spread; so the Egyptians came to dread the Israelites.",
          },
        ],
      },
      {
        chapter: 3,
        verses: [
          {
            verse: 1,
            text: "Now Moses was tending the flock of Jethro his father-in-law, the priest of Midian, and he led the flock to the far side of the wilderness and came to Horeb, the mountain of God.",
          },
          {
            verse: 2,
            text: "There the angel of the LORD appeared to him in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up.",
          },
          { verse: 3, text: 'So Moses thought, "I will go over and see this strange sight — why the bush does not burn up."' },
          {
            verse: 4,
            text: 'When the LORD saw that he had gone over to look, God called to him from within the bush, "Moses! Moses!" And Moses said, "Here I am."',
          },
          {
            verse: 5,
            text: '"Do not come any closer," God said. "Take off your sandals, for the place where you are standing is holy ground."',
          },
          {
            verse: 6,
            text: 'Then he said, "I am the God of your father, the God of Abraham, the God of Isaac and the God of Jacob." At this, Moses hid his face, because he was afraid to look at God.',
          },
          {
            verse: 7,
            text: 'The LORD said, "I have indeed seen the misery of my people in Egypt. I have heard them crying out because of their slave drivers, and I am concerned about their suffering."',
          },
          {
            verse: 13,
            text: "Moses said to God, \"Suppose I go to the Israelites and say to them, 'The God of your fathers has sent me to you,' and they ask me, 'What is his name?' Then what shall I tell them?\"",
          },
          {
            verse: 14,
            text: "God said to Moses, \"I AM WHO I AM. This is what you are to say to the Israelites: 'I AM has sent me to you.'\"",
          },
        ],
      },
    ],
  },
];

// ─── Legacy single-verse exports (kept for backwards compatibility) ──────────

export const torahVerses = [
  { book: "Genesis", chapter: 1, verse: 1, text: "In the beginning God created the heavens and the earth.", version: torahVersion },
  { book: "Genesis", chapter: 1, verse: 3, text: 'And God said, "Let there be light," and there was light.', version: torahVersion },
  {
    book: "Exodus",
    chapter: 3,
    verse: 14,
    text: "God said to Moses, \"I AM WHO I AM. This is what you are to say to the Israelites: 'I AM has sent me to you.'\"",
    version: torahVersion,
  },
  {
    book: "Exodus",
    chapter: 20,
    verse: 2,
    text: "I am the LORD your God, who brought you out of Egypt, out of the land of slavery.",
    version: torahVersion,
  },
  {
    book: "Leviticus",
    chapter: 19,
    verse: 18,
    text: "Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the LORD.",
    version: torahVersion,
  },
  { book: "Numbers", chapter: 6, verse: 24, text: "The LORD bless you and keep you;", version: torahVersion },
  { book: "Deuteronomy", chapter: 6, verse: 4, text: "Hear, O Israel: The LORD our God, the LORD is one.", version: torahVersion },
  {
    book: "Deuteronomy",
    chapter: 6,
    verse: 5,
    text: "Love the LORD your God with all your heart and with all your soul and with all your strength.",
    version: torahVersion,
  },
  {
    book: "Deuteronomy",
    chapter: 31,
    verse: 6,
    text: "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.",
    version: torahVersion,
  },
  {
    book: "Genesis",
    chapter: 12,
    verse: 1,
    text: 'The LORD had said to Abram, "Go from your country, your people and your father\'s household to the land I will show you."',
    version: torahVersion,
  },
  {
    book: "Genesis",
    chapter: 28,
    verse: 15,
    text: "I am with you and will watch over you wherever you go, and I will bring you back to this land. I will not leave you until I have done what I have promised you.",
    version: torahVersion,
  },
];

// ─── Daily reading helpers ───────────────────────────────────────────────────

export function getDailyTorahVerse() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return torahVerses[dayOfYear % torahVerses.length];
}

/**
 * Returns the daily Torah reading — a full portion + a specific chapter index.
 * Cycles through all portions and their chapters on a daily basis.
 */
export function getDailyReading() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Build a flat list of (portionIndex, chapterIndex) pairs
  const readings: { portionIndex: number; chapterIndex: number }[] = [];
  for (let p = 0; p < torahPortions.length; p++) {
    for (let c = 0; c < torahPortions[p].chapters.length; c++) {
      readings.push({ portionIndex: p, chapterIndex: c });
    }
  }

  const idx = dayOfYear % readings.length;
  const { portionIndex, chapterIndex } = readings[idx];
  const portion = torahPortions[portionIndex];
  const chapter = portion.chapters[chapterIndex];

  return {
    portion,
    chapter,
    chapterIndex,
    readingIndex: idx,
    totalReadings: readings.length,
  };
}

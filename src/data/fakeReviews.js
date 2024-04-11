// fakeReviews.js

const reviews = [
    {
        reviewer: "Casey Lee",
        date: "2023-12-11",
        comment:
            "The insights in this book are incredible. It’s a game-changer and highly recommended.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Jordan Pat",
        date: "2023-11-30",
        comment:
            "I struggled to get through this book, it just didn't click with me.",
        stars: "⭐",
    },
    {
        reviewer: "Charlie Torres",
        date: "2023-11-15",
        comment:
            "Quite a good read, though some parts were a little predictable.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Sam Kline",
        date: "2024-01-20",
        comment:
            "I had high hopes, but unfortunately, the book fell short of my expectations.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Taylor Bing",
        date: "2023-10-05",
        comment: "A masterpiece. Every sentence is a joy to read!",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Robin Grey",
        date: "2023-09-19",
        comment: "Not bad, but I doubt I'll remember it in a few weeks.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Leslie Banks",
        date: "2023-08-22",
        comment:
            "This is the worst book I've read in a long time. What a waste.",
        stars: "⭐",
    },
    {
        reviewer: "Pat Morgan",
        date: "2023-07-30",
        comment:
            "It was a decent way to spend a weekend, but nothing to write home about.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Morgan Ellis",
        date: "2023-06-18",
        comment:
            "Brilliant! A unique perspective and truly engaging from start to finish.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Chris Keller",
        date: "2023-06-01",
        comment:
            "The author's argument is weak, and the narrative is all over the place.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Jessie Doe",
        date: "2023-05-14",
        comment:
            "An okay book. I enjoyed parts of it but overall it's quite forgettable.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Alex Reese",
        date: "2023-05-02",
        comment:
            "I loved this book! It was engaging and thought-provoking throughout.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Riley Finn",
        date: "2023-04-20",
        comment:
            "Overrated. The premise is interesting, but the execution is lacking.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Jamie Lane",
        date: "2023-04-10",
        comment: "A well-written book that kept me hooked until the very end.",
        stars: "⭐⭐⭐⭐",
    },
    {
        reviewer: "Casey Quinn",
        date: "2023-03-28",
        comment:
            "Not my cup of tea. The pacing was slow, and I couldn't get into it.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Jordan Lee",
        date: "2023-03-10",
        comment: "Impressive! The book exceeded my expectations in every way.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Charlie Kim",
        date: "2023-02-27",
        comment: "A mediocre book that could have been so much more.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Sam R.",
        date: "2023-02-15",
        comment: "The book started strong but lost its way halfway through.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Taylor Smith",
        date: "2023-01-30",
        comment:
            "Absolutely loved it! I couldn't put it down and read it in one sitting!",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Robin Jones",
        date: "2023-01-16",
        comment:
            "It's an alright book – neither great nor terrible, just solidly okay.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Emily Carter",
        date: "2023-12-29",
        comment:
            "A truly enchanting read, filled with unexpected twists and deep, meaningful insights.",
        stars: "⭐⭐⭐⭐",
    },
    {
        reviewer: "Michael Thompson",
        date: "2023-12-25",
        comment:
            "The storyline felt disjointed, and I couldn't connect with the characters at all.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Sophia Martin",
        date: "2023-12-20",
        comment:
            "Captivating from the first page to the last! A novel that I will certainly revisit.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Ethan Clark",
        date: "2023-12-18",
        comment:
            "The plot was predictable and lacked originality. Quite disappointing.",
        stars: "⭐",
    },
    {
        reviewer: "Isabella Lewis",
        date: "2023-12-12",
        comment:
            "A masterpiece of storytelling, with richly drawn characters and a plot that keeps you guessing.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "William White",
        date: "2023-12-08",
        comment:
            "The book's pacing was slow, and the climax was underwhelming.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Olivia Harris",
        date: "2023-12-05",
        comment:
            "A decent read, well-researched and with some compelling moments, but it didn't leave a lasting impression.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Noah Walker",
        date: "2023-12-01",
        comment:
            "An emotional rollercoaster that left me in tears. The narrative was both powerful and poignant.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Emma Young",
        date: "2023-11-28",
        comment:
            "I found this book to be overhyped. The storyline was okay, but nothing stood out as exceptional.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Ava King",
        date: "2023-11-23",
        comment:
            "An intriguing blend of history and mystery. This book was a page-turner that I couldn't put down!",
        stars: "⭐⭐⭐⭐",
    },
    {
        reviewer: "Logan Wright",
        date: "2023-11-19",
        comment:
            "The book had a few good moments, but overall it was quite mundane and forgettable.",
        stars: "⭐⭐⭐",
    },
    {
        reviewer: "Charlotte Lee",
        date: "2023-11-15",
        comment:
            "A visionary work of art! This book has reshaped my perspective on many aspects of life.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Lucas Anderson",
        date: "2023-11-10",
        comment:
            "The narrative was too complex and hard to follow. I was lost after the first few chapters.",
        stars: "⭐",
    },
    {
        reviewer: "Mia Thomas",
        date: "2023-11-06",
        comment:
            "The character development was superb, and the story was both engaging and thought-provoking.",
        stars: "⭐⭐⭐⭐",
    },
    {
        reviewer: "Benjamin Scott",
        date: "2023-11-02",
        comment:
            "An underwhelming novel that failed to live up to its potential. The ending was particularly dissatisfying.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Amelia Johnson",
        date: "2023-10-29",
        comment:
            "A delightful read that combines humor, wit, and a touch of melancholy perfectly.",
        stars: "⭐⭐⭐⭐",
    },
    {
        reviewer: "Mason Carter",
        date: "2023-10-24",
        comment:
            "This book is a gem in its genre, offering deep insights and beautifully crafted storytelling.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        reviewer: "Harper Moore",
        date: "2023-10-20",
        comment:
            "I expected more based on the reviews. The plot was predictable and lacked depth.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Evelyn Bailey",
        date: "2023-10-16",
        comment:
            "A solid book with great pacing and a satisfying conclusion. It's definitely worth reading.",
        stars: "⭐⭐⭐⭐",
    },
    {
        reviewer: "Alexander Miller",
        date: "2023-10-12",
        comment:
            "The writing style was too verbose, and I found myself skimming through pages just to finish.",
        stars: "⭐⭐",
    },
    {
        reviewer: "Abigail Wilson",
        date: "2023-10-08",
        comment:
            "An outstanding novel that blends fantasy and reality in a unique and captivating way.",
        stars: "⭐⭐⭐⭐⭐",
    },
];

export default reviews;

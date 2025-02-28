document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("copy", function (e) {
    e.preventDefault(); // Disable copying
});

document.addEventListener("cut", function (e) {
    e.preventDefault(); // Disable cutting
});

document.addEventListener("paste", function (e) {
    e.preventDefault(); // Disable pasting
});

document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.shiftKey && e.key === "J") || 
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault(); // Disable DevTools
    }
});

setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        document.body.innerHTML = "Access Denied!";
        setTimeout(function () {
            window.location.href = "about:blank"; // Redirect
        }, 1000);
    }
}, 1000);

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function loadButtons() {
            let numbers = Array.from({ length: 16 }, (_, i) => i + 1);
            shuffleArray(numbers);

            let leftColumn = document.getElementById("leftColumn");
            let rightColumn = document.getElementById("rightColumn");
            leftColumn.innerHTML = "";
            rightColumn.innerHTML = "";

            numbers.forEach((num, index) => {
                let btn = document.createElement("button");
                btn.dataset.number = num;
                btn.onclick = () => showDivination(btn, num);
                btn.textContent = " ";
                if (index < 8) {
                    leftColumn.appendChild(btn);
                } else {
                    rightColumn.appendChild(btn);
                }
            });
        }

        function showDivination(button, number) {
            button.textContent = number;
            button.classList.add("reveal");
            setTimeout(() => {
                document.getElementById("result").textContent = `${meanings[number]}`;
            }, 1000);

            setTimeout(() => {
                button.textContent = " ";
                button.classList.remove("reveal");
                setTimeout(loadButtons, 2000);
            }, 5000);
        }

        const meanings = {
            1: "Good, talks about a long journey, traveling, successful marriage, long life, prosperity, and good health. If it appears for someone, their journey will be successful. The energy represents leadership, independence, and new beginnings. It carries the vibration of a king or a potential leader, symbolizing initiative, confidence, and self-reliance. Those influenced by this energy are natural starters but may struggle with finishing tasks. It governs inspiration, individuality, courage, willpower, and command. People aligned with this energy are best suited to running their own business rather than engaging in partnerships.Physically, the energy is associated with the right eye, heart, upper back, spinal cord, and the ocean. Constructive Aspects:Always take the initiative and be proactive.Stay energetic, persistent, and creative.Develop confidence, ambition, and self-reliance. Be bold, dynamic, and forward-thinking, but learn to manage your ego. Avoid helping others at your own expense—first establish yourself before lifting others. Destructive Aspects to Avoid: Do not have a weak will or be cowardly, insecure, or helpless. Maintain self-respect and confidence; don't allow others to manipulate or discard you. Avoid constant mood changes and selfish, impatient, intolerant, or prideful behavior. Refrain from being headstrong, greedy, or addicted to anything.",

            2: "Good, prosperity, good market, good spouse, no ailment. Warning: A parent must take care of their child, or the child may turn against them. The energy is deeply connected to the water element and is influenced by the Moon, with Monday as its ruling day and white as its ruling color. The core essence of this energy is emotion and harmony, emphasizing peace of mind, kindness, love, and togetherness. Those influenced by this energy are naturally caring, nurturing, and excellent in relationships, making them ideal partners in marriage and friendships. This energy governs sensitivity, teamwork, friendship, partnership, and marriage, while also influencing divorce, detailed explanations, public recognition, tolerance, modesty, and receptivity. Those under this energy tend to work behind the scenes, acting as the foundation for success in various endeavors. It also rules rhythm, cooperation, mercy, house construction, food-related businesses, crying, compassion, and peace. Physically, the energy is associated with the lagoon, left eye, breast, and stomach. Constructive Aspects of the Energy: Cultivate sensitivity, tact, and flexibility in your interactions. Strive for harmony, diplomacy, and cooperation in relationships. Be helpful, patient, sincere, and modest in all endeavors. Show courage, caution, and care in decision-making. Be warm and hospitable, especially toward visitors. Destructive Aspects to Avoid: Avoid being unresponsive, sluggish, cowardly, or overly dependent. Do not fall into indecisiveness, inactivity, or excessive self-doubt. Steer clear of dishonesty, manipulation, fault-finding, and unnecessary interference. Do not become condescending, deceitful, or emotionally detached—care for others, or risk becoming cold-hearted. Prioritize financial planning—save money early to build or own a house, as this is essential for stability under this energy.",

            3: "Not good, but there is a solution. Indicates possible surgical operation for a pregnant woman, but prayer can change everything. Represents Creativity & Expression. Traits: Artistic, sociable, optimistic, expressive. Meaning: Linked to communication, joy, and self-expression.",

            4: "50/50 chance, stagnancy; indicates slow progress in journeys. Represents Stability & Hard Work. Traits: Practical, disciplined, responsible, grounded. Meaning: Represents strong foundations, order, and persistence.",

            5: "Good, full of wealth, goodness, and speaks about pregnancy. Brings abundance in business and personal life. Represents Freedom & Change. Traits: Adventurous, energetic, curious, unpredictable. Meaning: The energy of transformation, travel, and dynamic energy.",

            6: "Not good, but there is a solution. Talks about star and destiny issues that can be corrected with prayer and giving back to nature. Challenges will pass with perseverance. Represents Nurturing & Responsibility. Traits: Caring, protective, loyal, family-oriented. Meaning: Symbolizes service, home, love, and responsibility.",

            7: "Good, a house of powerful people and entities; signifies obedience and a good home. Capital YES. Signifies leadership and influence. Represents Wisdom & Spirituality. Traits: Analytical, introspective, intellectual, mysterious. Meaning: Associated with spiritual awakening, deep thinking, and mysticism.",

            8: "Not good and no solution. Speaks about death, bad omen, and sickness leading to death. If it appears for a sick person, they may not recover. Represents Power & Success. Traits: Ambitious, materialistic, authoritative, resilient. Meaning: The energy of financial success, karma, and personal authority.",

            9: "Not good and no solution. Indicates death. Money cannot be collected from such person. The situation is severe, and no remedy is available. Represents Completion & Humanitarianism. Traits: Compassionate, wise, selfless, idealistic. Meaning: Represents endings, wisdom, universal love, and transformation.",

            10: "Good, but momentary luck. Speaks of goodness and happiness that doesn’t last long. Be cautious and maximize opportunities while they last. Represents Karmic Cycles & New Beginnings. Traits: Independent, adaptable, visionary. Meaning: A powerful energy of completion and renewal, symbolizing both endings and fresh starts. It carries the energy of 1, but with divine guidance.",

            11: "Not good and no solution. Indicates 'No' to anything being asked. A strong negative sign for any inquiry. Represents Intuition & Spiritual Awakening. Traits: Psychic, visionary, sensitive, inspiring. Meaning: A Master energy, representing heightened intuition, insight, and spiritual enlightenment. It’s the gateway to higher consciousness.",

            12: "50/50 chance, talks about promiscuity. Be careful of fair-skinned people. If it appears for a man, he may engage in stealing and cheating. If for a woman, she may also be involved in infidelity. Represents Sacrifice & Learning. Traits: Wise, patient, adaptable, service-oriented. Meaning: Reflects karmic lessons, cycles of life, and cosmic order. Found in 12 zodiac signs, 12 months, and 12 disciples in spiritual traditions.",

            13: "If the client is sick, it is the hand of the powerful ones; if no quick response, they may not survive. If not sickness, it is good. Deep ancestral influence. Represents Transformation & Rebirth. Traits: Determined, disciplined, deep thinker. Meaning: A misunderstood number, often seen as unlucky, but actually represents death and rebirth, profound transformation, and spiritual evolution.",

            14: "Good, everything about it is positive. Indicates success, balance, and positive energies in all endeavors. Represents Movement & Adaptability. Traits: Adventurous, persuasive, curious, dynamic. Meaning: Symbolizes freedom through discipline, and the need for balance in life. It carries the energy of change and exploration.",

            15: "Good, talks about both men and women; anything that comes to it is good. Signifies harmony in relationships and business. Represents Magnetism & Influence. Traits: Charismatic, artistic, persuasive, charming. Meaning: Represents power, attraction, and the ability to manifest desires. It’s a combination of leadership and change, making it a force of transformation.",

            16: "Not good, talks about divorce. The person they divorced is causing hindrance. A warning to be cautious in relationships. Represents Spiritual Awakening & Challenges. Traits: Introspective, analytical, deeply spiritual. Meaning: A karmic number representing self-realization, inner wisdom, and sometimes trials leading to enlightenment. It signifies breakdowns leading to breakthroughs."
        };

        loadButtons();
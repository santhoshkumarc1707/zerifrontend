import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import arrow icons

const questions = [
  {
    id: "q1",
    question: "Why should I sell old silk sarees online?",
    answer: `There are several reasons why you might want to consider selling your old silk sarees online:\n
1. **Convenience**: You can sell your old silk sarees from the comfort of your own home, without having to worry about transportation or finding a physical location to sell them.\n
2. **Easy price comparison**: It is easier to compare prices and get a sense of what your old silk sarees are worth when you sell them online.\n
3. **Greater transparency**: OLDZARI.COM provides customers with detailed information about the quality and value of their old silk sarees, which can give you greater confidence in the process.\n
4. **Potential to get a better price**: Depending on the condition and quality of your old silk sarees, you may be able to get a better price selling them online than you would through other selling methods.\n
5. **Quick and easy**: The process of selling old silk sarees online is usually quick and easy, with our website providing simple and straightforward selling processes.`
  },
  {
    id: "q2",
    question: "What Zari items can I sell?",
    answer: `You can sell old or damaged Zari Silk Sarees, including:\n
- **Kanchipuram/Kanjivaram Silk Saree**\n
- **Banarasi Saree**\n
- **Zari Blouses**\n
- **Zari Dhotis**\n
- **Silk Skirts**\n
- **Zari Tissues**\n
- **Any Pure Zari-related items**\n
Visit **OLDZARI.COM** for more details.`
  },
  {
    id: "q3",
    question: "How to identify pure Zari vs. tested/imitation Zari?",
    answer: `You can distinguish pure Zari from tested/imitation Zari using these factors:\n
- **Color**: Pure Zari has a distinct gold or silver color.\n
- **Feel**: Pure Zari is soft, smooth, and reflects light beautifully, whereas tested Zari feels stiffer and does not flow as well.\n
- **Quality & Quantity**: Pure Zari contains a higher percentage of silver and gold, especially in older sarees.\n
- **Certification**: Look for an authenticity certificate from a trusted organization to verify the Zari's purity.`
  },
  {
    id: "q4",
    question: "Where can I purchase a pure Zari Kanchipuram/Kanjivaram saree?",
    answer: `To purchase an authentic pure Zari saree, follow these tips:\n
1. **Research the Seller**: Ensure they are reputable, check reviews, ratings, and experience.\n
2. **Check the Fabric**: Pure Zari sarees are made of high-quality silk, which feels soft and luxurious.\n
3. **Inspect the Design**: Look for intricate craftsmanship and well-detailed patterns.\n
4. **Consider the Price**: Pure Zari sarees are expensive due to their material and craftsmanship—compare prices for authenticity.\n
5. **Ask for Certification**: Request an authenticity certificate to confirm it is made of pure Zari.\n
Always buy from trusted sources to ensure quality.`
  }
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center inline-block px-4 py-1 bg-[#ffd86b]">
        Frequently Asked Questions
      </h2>
      <div className="mt-6">
        {questions.map((q) => (
          <div key={q.id} className="mt-4 border rounded shadow">
            <button
              onClick={() => toggleQuestion(q.id)}
              className="w-full text-left flex justify-between items-center p-4 bg-gray-100 font-semibold"
            >
              {q.question}
              {openQuestion === q.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openQuestion === q.id && (
              <div className="p-4 border-t bg-white whitespace-pre-line">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

import cards from "./cards.json";

export default function CardsGallery() {
    return (
        <div className="flex flex-wrap w-full justify-start  content-start mx-auto">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="sm:w-1/3 md:w-1/3 lg:w-1/4 rounded-md bg-gradient-to-tr from-teal-500 to-emerald-600 mx-2 my-2 p-4 h-1/6"
                >
                    <p>{card.title}</p>
                </div>
            ))}
        </div>
    );
}
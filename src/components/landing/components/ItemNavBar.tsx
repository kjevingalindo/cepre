interface ItemNavBarProps {
    text: string;
    targetView: string;
    setView: (view: string) => void;
}

const ItemNavBar: React.FC<ItemNavBarProps> = ({ text, targetView, setView }) => {
    const handleClick = () => {
        setView(targetView);
    };

    return (
        <button
            className={`text-gray-100 font-semibold text-lg hover:bg-orange-400 hover:text-gray-700 rounded-lg transition  py-1 px-2  ${targetView === "home" ? "font-bold" : ""}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default ItemNavBar;

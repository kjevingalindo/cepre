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
            className={`text-white ${targetView === "home" ? "font-bold" : ""}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default ItemNavBar;

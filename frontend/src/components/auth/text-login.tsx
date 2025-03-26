import { useEffect, useState } from "react";

const TypingText = () => {
    const texts = ["¿Listo para el futuro?", "¡Es hora de ingresar!", "Consistencia . . .", "Sigue aprendiendo . . .", "Disciplina . . ."];
    const typingSpeed = 100;
    const delayBetweenTexts = 1500;

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (charIndex < texts[index].length) {
                setText(texts[index].slice(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => {
                    setIndex(prev => (prev + 1) % texts.length);
                    setCharIndex(0);
                }, delayBetweenTexts);
            }
        };

        const timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, index]);

    return (
        <div className="flex min-h-screen items-center justify-center p-10 flex-col">
            <div className="grid grid-cols-2 grid-rows-2 gap-8 ">
                <div className="justify-items-end">
                    <img src="/images/ImagenTecnica2.png" alt="Logo Unajma" className="w-48" />
                </div>
                <h1 className="text-8xl font-semibold ">Cepre Unajma</h1>
                <div><br /></div>
                <h1 className="text-3xl  text-white font-bold p-3">{text}</h1>
            </div>
        </div>
    );
};

export default TypingText;

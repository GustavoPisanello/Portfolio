import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenuItem({ data, isOpen }) {
    const [visibleWords, setVisibleWords] = useState([]);

    useEffect(() => {
        if (isOpen) {
            setVisibleWords([]); // Limpa as palavras visíveis ao abrir
            data.forEach((group, groupIndex) => {
                const word = group.name; // Nome completo da palavra
                word.split("").forEach((letter, index) => {
                    setTimeout(() => {
                        setVisibleWords((prev) => {
                            // Exibe a palavra quando todas as letras estão visíveis
                            const wordVisible = prev.find(item => item.groupIndex === groupIndex);
                            if (!wordVisible) {
                                return [...prev, { groupIndex, lettersVisible: index + 1 }];
                            } else {
                                return prev.map(item =>
                                    item.groupIndex === groupIndex
                                        ? { ...item, lettersVisible: index + 1 }
                                        : item
                                );
                            }
                        });
                    }, index * 150); // Atraso entre as letras
                });
            });
        } else {
            setVisibleWords([]); // Esconde todas as palavras ao fechar
        }
    }, [isOpen, data]);

    return (
        <>
            {data.map((group, groupIndex) => {
                const visibleWord = visibleWords.find(item => item.groupIndex === groupIndex);
                const lettersVisible = visibleWord ? visibleWord.lettersVisible : 0;
                
                return (
                    <Link
                        key={groupIndex}
                        className={`font-[JockeyOne] py-3 text-primary_color flex items-center transition-opacity ${
                            isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        to={group.link}
                    >
                        <p className="flex">
                            {group.name.split("").map((letter, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transition-opacity ${
                                        index < lettersVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    {letter}
                                </span>
                            ))}
                        </p>
                    </Link>
                );
            })}
        </>
    );
}

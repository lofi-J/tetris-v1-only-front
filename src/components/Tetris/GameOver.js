import "../../css/GameOver.css"

import { useEffect } from "react";

import { useSelector } from "react-redux";

import { playSound } from "../../hooks/tetris/playSound";


const GameOver = ({ score, restart, setIsStart }) => {
	const isMute = useSelector((store) => store.isMute.value);

	useEffect(() => {
		if (!isMute) {
			playSound('/sound/gameOver.wav', 0.2); // game over sound
		}
	}, [isMute]);

	return (
		<div className="gameover-modal">
			<h1>Game Over</h1>

			<span>
				<span>score :</span> <span>{score}</span>
			</span>

			<div className="gameover-modal-buttons">
				<button onClick={restart}>Play Again</button>
				<button onClick={setIsStart}>Main Menu</button>
			</div>
		</div>
	);
};

export default GameOver;

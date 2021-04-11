import { useRef, useState, useEffect } from 'react';
function App() {
	const [anagrams, setAnagrams] = useState([]);
	const [inputString, setInputString] = useState('');
	const stringInput = useRef(null);
	const getAnagrams = string => {
		if (string.length === 0) return [''];
		let result = {};
		string.split('').forEach(function (letter, i) {
			let remainingLetters = string.slice(0, i) + string.slice(i + 1);
			getAnagrams(remainingLetters).forEach(function (anagram) {
				result[letter + anagram] = true;
			});
		});
		return Object.keys(result);
	};
	return (
		<div className="flex flex-col gap-2">
			<h1>Anagram Generator</h1>
			<input
				ref={stringInput}
				type="text"
				placeholder="הכנס/י מילה"
				onChange={e => setInputString(e.target.value)}
			/>
			<button onClick={() => setAnagrams(getAnagrams(inputString))}>Go!</button>
			<div>
				<p>תוצאות</p>
				<ul>
					{anagrams.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default App;

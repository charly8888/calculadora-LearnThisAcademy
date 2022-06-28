import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    const userAnswer = await promptQuestion('introduce tu operacion :');
    console.log(userAnswer);
})();

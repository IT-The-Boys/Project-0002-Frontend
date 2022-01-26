/**
 * Returns question with all "_____" replaced with values from answers array
 *
 * @param {string} question CAH Black card text.
 * @param {Array[string]} answers array of CAH white card's texts 
 * @return {string} question with all "_____" replaced with values from answers array.
 */
export const insertAIntoQ =
    (question, answers) => {
        let counter = 0;
        question = question.replace(/_____/g, () => {
            counter++;
            return answers[counter - 1]
        });
        return question;
    }
/**
 * Check number of cards to be picked to answer question
 * @param {string} question CAH Black card text
 * @returns {number} count of "______" in question
 */
export const checkQuestion =
    (question) => {
        return (question.match(/_____/g)|| []).length
    }

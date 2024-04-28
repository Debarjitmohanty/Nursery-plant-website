/*const accordionItems = document.querySelectorAll('.qst-item')
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelectorAll('.qst-header')
    accordionHeader.addEventListener('click', () =>{
    toggleItem(item)   

    })

})
const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.qst-content')
    accordionContent.style.height = accordionContent.scrollHeading + 'px'
    item.classList.add('accordion-open')


}


document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.qst-item');

    questions.forEach(question => {
        const header = question.querySelector('.qst-header');
        const content = question.querySelector('.qst-content');

        header.addEventListener('click', () => {
            if (!question.classList.contains('active')) {
                closeAllQuestions();
                openQuestion(question);
            } else {
                closeQuestion(question);
            }
        });
    });

    function closeAllQuestions() {
        questions.forEach(question => {
            closeQuestion(question);
        });
    }

    function openQuestion(question) {
        question.classList.add('active');
        const content = question.querySelector('.qst-content');
        content.style.height = content.scrollHeight + 'px';
    }

    function closeQuestion(question) {
        question.classList.remove('active');
        const content = question.querySelector('.qst-content');
        content.style.height = '0';
    }
});
*/



document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.qst-item');

    questions.forEach(question => {
        const header = question.querySelector('.qst-header');
        const content = question.querySelector('.qst-content');

        header.addEventListener('click', () => {
            if (!question.classList.contains('active')) {
                closeAllQuestions();
                openQuestion(question);
            } else {
                closeQuestion(question);
            }
            // Toggle color class on header and content
            header.classList.toggle('clicked');
            content.classList.toggle('clicked');
        });
    });

    function closeAllQuestions() {
        questions.forEach(question => {
            closeQuestion(question);
        });
    }

    function openQuestion(question) {
        question.classList.add('active');
        const content = question.querySelector('.qst-content');
        content.style.height = content.scrollHeight + 'px';
    }

    function closeQuestion(question) {
        question.classList.remove('active');
        const content = question.querySelector('.qst-content');
        content.style.height = '0';
    }
});


















































































































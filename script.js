const quotes = [
    {
        text: "A vida é 10% o que acontece com você e 90% como você reage a isso.",
        author: "Charles R. Swindoll"
    },
    {
        text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        author: "Robert Collier"
    },
    {
        text: "Acredite que você pode e você já está no meio do caminho.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Não importa que você vá devagar, contanto que você não pare.",
        author: "Confúcio"
    },
    {
        text: "O único limite para a nossa realização de amanhã são as nossas dúvidas de hoje.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que faz, você terá sucesso.",
        author: "Albert Schweitzer"
    },
    {
        text: "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
        author: "Jim Rohn"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');
const clockElement = document.getElementById('clock');

// Função para exibir uma citação aleatória
function showRandomQuote() {
    // Aplica o efeito de virar página
    quoteBox.classList.add('flip-effect');

    // Aguarda a metade da animação para trocar a citação
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = `"${quotes[randomIndex].text}"`;
        authorElement.textContent = `- ${quotes[randomIndex].author}`;

        // Remove o efeito após a animação terminar
        setTimeout(() => {
            quoteBox.classList.remove('flip-effect');
        }, 500); // Tempo correspondente à metade da animação
    }, 500); // Tempo correspondente à metade da animação
}

// Função para atualizar o relógio
async function updateClock() {
    try {
        // Faz uma requisição à WorldTimeAPI
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();

        // Extrai a hora atual
        const datetime = new Date(data.datetime);
        const hours = datetime.getHours().toString().padStart(2, '0');
        const minutes = datetime.getMinutes().toString().padStart(2, '0');
        const seconds = datetime.getSeconds().toString().padStart(2, '0');

        // Atualiza o elemento do relógio
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    } catch (error) {
        console.error('Erro ao buscar a hora:', error);
        clockElement.textContent = "Erro ao carregar a hora.";
    }
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Mostra uma nova citação a cada 8 segundos
setInterval(showRandomQuote, 8000);

// Mostra a primeira citação e a hora ao carregar a página
showRandomQuote();
updateClock();
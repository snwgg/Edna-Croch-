function openModal(produto) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");

    // Dados de exemplo para cada produto
    const produtos = {
        produto1: {
            img: "https://via.placeholder.com/400x400.png?text=Produto+1+Detalhes",
            title: "Produto 1"
        },
        produto2: {
            img: "https://via.placeholder.com/400x400.png?text=Produto+2+Detalhes",
            title: "Produto 2"
        },
        produto3: {
            img: "https://via.placeholder.com/400x400.png?text=Produto+3+Detalhes",
            title: "Produto 3"
        }
    };

    modalImg.src = produtos[produto].img;
    modalTitle.textContent = produtos[produto].title;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

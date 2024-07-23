class ProductCard extends HTMLElement {
    constructor() {
        super(); 
        const shadow = this.attachShadow({ mode: 'open' });

        // Criação dos elementos do card
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = this.getAttribute('img-src');
        img.alt = this.getAttribute('img-alt');
        img.style.width = '50%'; 
        img.style.height = 'auto'; 
        img.style.maxHeight = '1350px'; 

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = this.getAttribute('title');

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = this.getAttribute('description');

        const link = document.createElement('a');
        link.classList.add('btn');
        link.href = this.getAttribute('link');
        link.textContent = 'Comprar';
        link.style.display = 'inline-block';
        link.style.padding = '7px 1px';
        link.style.color = '#fff';
        link.style.backgroundColor = '#007bff';
        link.style.borderRadius = '15px';
        link.style.textDecoration = 'none';
        link.style.textAlign = 'center';
        link.style.marginTop = '1px';
        link.style.width = '25%';
        
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        
        card.appendChild(img);
        card.appendChild(cardBody);

        shadow.appendChild(card);
    }
}

customElements.define('product-card', ProductCard);

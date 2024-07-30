// resources
let resources = {
    p1: {
        title: 'Enhanced Grid Infrastructure',
        bodyText: '<p><b>Smart Grids:</b> Investing in smart grid technology can improve the efficiency of energy distribution and reduce energy losses. Smart grids can manage and optimize the use of renewable energy sources, reducing costs associated with energy generation and transmission.<br><br><b>Energy Storage Solutions:</b> Developing and deploying advanced energy storage systems, such as batteries and pumped hydro storage, can help balance supply and demand, making clean energy more reliable and cost-effective. Improved storage can also reduce the need for backup fossil fuel plants.</p>',
        url: 'img/a-house.jpg'
    },
    p2: {
        title: 'Policy and Regulatory Reforms',
        bodyText: '<p><b>Carbon Pricing:</b> Implementing carbon pricing mechanisms, such as carbon taxes or cap-and-trade systems, can make fossil fuels more expensive relative to clean energy. This economic signal can drive investment in renewable energy and make it more competitive.<br> <br><b> Renewable Portfolio Standards:</b> Establishing mandates that require a certain percentage of energy to come from renewable sources can stimulate market demand and drive down costs through economies of scale. <br><br><b>Streamlined Permitting:</b> Simplifying and expediting the permitting process for renewable energy projects can reduce the time and cost required to bring new clean energy projects online.</p>',
        url: 'img/policy.jpg'
    },
    p3: {
        title: 'Community and Cooperative Models',
        bodyText: '<p><b>Energy Cooperatives:</b> Forming local energy cooperatives can enable communities to invest in and benefit from renewable energy projects collectively. These cooperatives can share costs and profits, making clean energy more affordable for individual members.<br><br><b>Local and Regional Initiatives:</b> Supporting local and regional clean energy projects, such as municipal solar farms or community wind projects, can reduce costs and create economic benefits for local communities.</p>',
        url: 'img/cooperative.jpg'
    }
}

// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/a-house.jpg",
       "./img/policy.jpg",
       "./img/cooperative.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


// get the references to the active parts of html
let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

// event handler
function selectPage(ev) {
    let currentButton = ev.target;
    for (let btn of buttons) {

        if (btn.hasAttribute('class')) {

            btn.removeAttribute('class');
        }
    }

    // add the attribute id="active" to the currently clicked element
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    currentButton.setAttribute('class', 'active');



    // pushing the corresponding data inside the div#dynamic-content:
    dc.innerHTML = `
            <h2>${resources[currentButton.id].title}</h2> 
            <img src="${resources[currentButton.id].url}">
            <p>${resources[currentButton.id].bodyText}</p>
            `;
}

document.addEventListener('DOMContentLoaded', (eve) => {
    dc.innerHTML = `
    <h2>${resources.p1.title}</h2> 
    <img src="${resources.p1.url}">
    <p>${resources.p1.bodyText}</p>
    `;
});

// registering buttons for click event
buttons[0].addEventListener('click', selectPage);
buttons[1].addEventListener('click', selectPage);
buttons[2].addEventListener('click', selectPage);
const products = [
    { image: "./images/blogs/blog-1.png", name: "How Can I Get Spirit Airlines Last Minute Flights Deals?", link: "https://www.way4fly.com/blog/how-can-i-get-spirit-airlines-last-minute-flights-deals.aspx" },
    { image: "./images/blogs/blog-2.png", name: "How Can I Get Spirit Airlines Last Minute Flights?", link: "https://www.way4fly.com/blog/how-can-i-get-spirit-airlines-last-minute-flights.aspx" },
    { image: "./images/blogs/blog-3.png", name: "How Do I Change My Spirit Airlines Flight?", link: "https://www.way4fly.com/blog/how-do-i-change-my-spirit-airlines-flight.aspx" },
    { image: "./images/blogs/blog-4.png", name: "How Do I Speak Live Person Spirit Airlines?", link: "https://www.way4fly.com/blog/how-do-i-speak-live-person-spirit-airlines.aspx" },
    { image: "./images/blogs/blog-5.png", name: "How to Book Group Travel Tickets with Spirit Airlines??", link: "https://www.way4fly.com/blog/how-to-book-group-travel-tickets-with-spirit-airlines.aspx" },
    { image: "./images/blogs/blog-6.png", name: "How do I Contact United Airlines?", link: "https://www.way4fly.com/blog/how-do-i-contact-united-airlines.aspx" },
    { image: "./images/blogs/blog-7.png", name: "How to Contact Allegiant Airlines By Email", link: "https://www.way4fly.com/blog/how-to-contact-allegiant-airlines-by-email.aspx" },
    { image: "./images/blogs/blog-8.png", name: "How do I Contact JetBlue Airlines", link: "https://www.way4fly.com/blog/how-do–i-contact-jetblue-airlines.aspx" },
    { image: "./images/blogs/blog-9.png", name: "How to Talk with Alaska Airlines Representative Customer Service", link: "https://www.way4fly.com/blog/how-to-talk-with-alaska-airlines-representative.aspx" },
    { image: "./images/blogs/blog-10.png", name: "Ways to Speak with Delta Airlines Representative|+1-800-518-9067|", link: "https://www.way4fly.com/blog/ways-to-speak-with-delta-airlines-representative.aspx" },
    { image: "./images/blogs/blog-11.png", name: "Why Alaska is Best for Portland Travel", link: "https://www.way4fly.com/blog/why-alaska-is-best-for-portland-travel.aspx" },
    { image: "./images/blogs/blog-12.png", name: "Advantages of Alaska Airlines Official Site", link: "https://www.way4fly.com/blog/advantages-of-alaska-airlines-official-site.aspx" },
    { image: "./images/blogs/blog-13.png", name: "Types of Cabin Class in Alaska Air Flights", link: "https://www.way4fly.com/blog/types-of-cabin-class-in-alaska-air-flights.aspx" },
    { image: "./images/blogs/blog-14.png", name: "Facts Check on Alaska Airlines Flights", link: "https://www.way4fly.com/blog/facts-check-on-alaska-airlines-flights.aspx" },
    { image: "./images/blogs/blog-15.png", name: "Easter Travel with Alaska Airlines Reservations", link: "https://www.way4fly.com/blog/easter-travel-with-alaska-airlines-reservations.aspx" },
    { image: "./images/blogs/blog-16.png", name: "JetBlue Airlines Black Friday Sale", link: "https://www.way4fly.com/blog/jetblue-airlines-black-friday-sale.aspx" },
    { image: "./images/blogs/blog-17.png", name: "JetBlue Airfare Tips That You Can’t Miss", link: "https://www.way4fly.com/blog/jetblue-airfare-tips-that-you-can’t-miss.aspx" },
    { image: "./images/blogs/blog-18.png", name: "JetBlue Airlines Manage My Booking ", link: "https://www.way4fly.com/blog/jetblue-airlines-manage-my-booking.aspx" },
    { image: "./images/blogs/blog-19.png", name: "Book Tickets from JetBlue Airlines Official Site", link: "https://www.way4fly.com/blog/book-tickets-from-jetblue-airlines-0fficial-site.aspx" },
    { image: "./images/blogs/blog-20.png", name: "How to Contact JetBlue Airlines", link: "https://www.way4fly.com/blog/how-to-contact-jetblue-airlines.aspx" },
    { image: "./images/blogs/blog-21.png", name: "JetBlue Airlines Booking Tips", link: "https://www.way4fly.com/blog/jetblue-airlines-booking-tips.aspx" },
    { image: "./images/blogs/blog-22.png", name: "JetBlue Airlines Flights Booking Deals", link: "https://www.way4fly.com/blog/jetblue-airlines-flights-booking-deals.aspx" },
    { image: "./images/blogs/blog-23.png", name: "Budget Friendly Frontier Airlines Reservations Travel", link: "https://www.way4fly.com/blog/things-to-know-for-budget-friendly-frontier-airlines-reservation" },
    { image: "./images/blogs/blog-24.png", name: "5 Tips to Book Cheap Eva Airlines Reservations Online", link: "https://www.way4fly.com/blog/5-tips-to-book-cheap-eva-airlines-reservations-online.aspx" },
    { image: "./images/blogs/blog-25.png", name: "How to Travel Standby on International Flights", link: "https://www.way4fly.com/blog/how-to-travel-standby-on-international-flights.aspx" },
    { image: "./images/blogs/blog-26.png", name: "What You Need to Know Before Book Flight Online", link: "https://www.way4fly.com/blog/what-you-need-to-know-before-book-flight-online.aspx" },
    { image: "./images/blogs/blog-27.png", name: "Is Pre Booking Really important for Cheap Tickets", link: "https://www.way4fly.com/blog/is-pre-booking-really-important-for-cheap-tickets.aspx" },
    { image: "./images/blogs/blog-28.png", name: "7 Ways to Save Money Online on Travel Search Engines", link: "https://www.way4fly.com/blog/7-ways-to-save-money-online-on-travel-search-engines.aspx" },
    { image: "./images/blogs/blog-29.png", name: "5 Tips to Book Cheap Alaska Airlines Reservations", link: "https://www.way4fly.com/blog/5-tips-to-book-cheap-alaska-airlines-reservations.aspx" },
    { image: "./images/blogs/blog-30.png", name: "5 Smart Tips to Bypass Your Baggage Fee On United Airlines", link: "https://www.way4fly.com/blog/5-smart-tips-to-bypass-your-baggage-fee-on-united-airlines.aspx" },
    { image: "./images/blogs/blog-31.png", name: "United Airlines Last-Minute Flights Booking Deals to Know", link: "https://www.way4fly.com/blog/united-airlines-last-minute-flights-booking-deals-to-know.aspx" },
    { image: "./images/blogs/blog-32.png", name: "Reasons to Book Your Next Flight to Europe in Autumn", link: "https://www.way4fly.com/blog/tips-to-book-cheap-aeromexico-airlines-flights-reservations.aspx" },
    { image: "./images/blogs/blog-33.png", name: "Reasons to Book Your Next Flight to Europe in Autumn", link: "https://www.way4fly.com/blog/reasons-to-book-your-next-flight-to-europe-in-autumn.aspx" },
    { image: "./images/blogs/blog-34.png", name: "Cost Cutting Ideas for New Year Flights Booking", link: "https://www.way4fly.com/blog/cost-cutting-ideas-for-new-year-flights-booking.aspx" },
    { image: "./images/blogs/blog-35.png", name: "Why United is Premium Airlines for United States Travel", link: "https://www.way4fly.com/blog/why-united-is-premium-airlines-for-united-states-travel.aspx" },
    { image: "./images/blogs/blog-36.png", name: "Major Facts to Know About JetBlue Airlines", link: "https://www.way4fly.com/blog/major-facts-to-know-about-jetblue-airlines.aspx" },
    { image: "./images/blogs/blog-37.png", name: "How to Get Covid-19 Test When You Fly", link: "https://www.way4fly.com/blog/how-to-get-covid-19-test-when-you-fly.aspx" },
    { image: "./images/blogs/blog-38.png", name: "Silly Myths About Last Minute Booking", link: "https://www.way4fly.com/blog/silly-myths-about-last-minute-booking.aspx" },
    { image: "./images/blogs/blog-39.png", name: "3 Things to Know For Last-Minute JetBlue Flights |Way4Fly Booking", link: "https://www.way4fly.com/blog/3-things-to-know-for-last-minute-jetblue-flights.aspx" },
    { image: "./images/blogs/blog-40.png", name: "Tips to Know For Allegiant Airlines Reservations |Way4Fly", link: "https://www.way4fly.com/blog/tips-to-know-for-allegiant-airlines-reservations.aspx" },
    { image: "./images/blogs/blog-41.png", name: "Reasons to Consider Allegiant Airlines Official Site For Booking", link: "https://www.way4fly.com/blog/5-reasons-why-one-should-consider-allegiant-airlines-official-site-for-booking.aspx" },
    { image: "./images/blogs/blog-42.png", name: "Frontier Airlines Check-In Policy", link: "https://www.way4fly.com/blog/frontier-airlines-check-in-policy.aspx" },
    { image: "./images/blogs/blog-43.png", name: "5 Simple Tricks to Get Cheap Tickets With Any Airline in 2021", link: "https://www.way4fly.com/blog/5-simple-tricks-to-get-cheap-tickets-with-any-airline-in-2021.aspx" },
    { image: "./images/blogs/blog-44.png", name: "Stuff to Avoid Higher Airfare on Frontier Airlines", link: "https://www.way4fly.com/blog/stuff-to-avoid-higher-airfare-on-frontier-airlines.aspx" },
    { image: "./images/blogs/blog-45.png", name: "5 Things to Know Before Fly With Frontier Airlines Reservations", link: "https://www.way4fly.com/blog/5-things-to-know-before-fly-with-frontier-airlines-reservations.aspx" },
    { image: "./images/blogs/blog-46.png", name: "Essential tips while traveling to Iceland", link: "https://www.way4fly.com/blog/essential-tips-while-traveling-to-iceland.aspx" },
    { image: "./images/blogs/blog-47.png", name: "Expert Tips for Long-Haul Flights Booking", link: "https://www.way4fly.com/blog/tips-for-long-haul-flights-booking.aspx" },
    { image: "./images/blogs/blog-48.png", name: "Facts about Allegiant Airlines that You Must Know", link: "https://www.way4fly.com/blog/facts-about-allegiant-airlines.aspx" },
    { image: "./images/blogs/blog-49.png", name: "Tips to Get Your Preferred Seats on DeltaReservations", link: "https://www.way4fly.com/blog/tips-to-get-your-preferred-seats-on-delta.aspx" },
    { image: "./images/blogs/blog-50.png", name: "5 Things You Should Know Before Book Airlines Reservations", link: "https://www.way4fly.com/blog/things-you-should-know-before-book-airlines-reservations.aspx" },
    { image: "./images/blogs/blog-51.png", name: "Major Things About Alaska Airlines Pet Policy Budget", link: "https://www.way4fly.com/blog/major-things-about-alaska-airlines-pet-policy.aspx" },
    { image: "./images/blogs/blog-52.png", name: "Appropriate Time to Manage Alaska Airlines Reservations in Affordable Budget", link: "https://www.way4fly.com/blog/appropriate-time-to-manage-alaska-airlines-reservations.aspx" },
    { image: "./images/blogs/blog-53.png", name: "8 Best Things About Delta Airlines Flights", link: "https://www.way4fly.com/blog/8-best-things-about-delta-airlines-flights.aspx" },
    { image: "./images/blogs/blog-54.png", name: "Way4Fly 2020 Travel Cheat Sheet", link: "https://www.way4fly.com/blog/travel-cheap-sheet-2020-find-cheap-flights.aspx" },
    { image: "./images/blogs/blog-55.png", name: "5 Things For Best International Road Trips That You Must Know", link: "https://www.way4fly.com/blog/international-road-trips.aspx" },
    { image: "./images/blogs/blog-56.png", name: "Why You Need a Special Weekend Trip in April", link: "https://www.way4fly.com/blog/special-weekend-trip-in-april.aspx" },
    { image: "./images/blogs/blog-57.png", name: "United Polaris Business Class", link: "https://www.way4fly.com/blog/united-polaris-business-class-dining-review.aspx" },
    { image: "./images/blogs/blog-58.png", name: "Delta Main Cabin Review", link: "https://www.way4fly.com/blog/delta-main-cabin-review.aspx" }
];

const productContainer = document.querySelector(".blog-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumberSpan = document.getElementById("page-number");

const productsPerPage = 12;
let currentPage = 1;
let showAllPages = false;

function displayProducts(page) {
    productContainer.innerHTML = "";
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    pageProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <a href="${product.link}">
                        <div class="column grid grid1">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="innercol">
                                <p>${product.name}</p>
                                <p><b><u>Read More <i class="fa-solid fa-angles-right"></i></u></b></p>
                            </div>
                        </div>
                    </a>
        `;
        productContainer.appendChild(productDiv);
    });

    updatePaginationButtons();
}

function getTotalPages() {
    return Math.ceil(products.length / productsPerPage);
}

function updatePaginationButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage >= getTotalPages();

    pageNumberSpan.innerHTML = "";
    const totalPages = getTotalPages();

    if (showAllPages || totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            createPageButton(i);
        }
    } else {
        createPageButton(1);
        createPageButton(2);
        createPageButton(3);

        if (currentPage > 4) {
            createEllipsis();
        }

        if (currentPage > 3 && currentPage < totalPages - 2) {
            createPageButton(currentPage);
        }

        if (totalPages - 2 > 3) {
            if (currentPage < totalPages - 3) {
                createEllipsis();
            }
        }

        createPageButton(totalPages - 2);
        createPageButton(totalPages - 1);
        createPageButton(totalPages);
    }

    function createPageButton(pageNumber) {
        const pageButton = document.createElement("button");
        pageButton.textContent = pageNumber;
        pageButton.addEventListener("click", () => {
            currentPage = pageNumber;
            displayProducts(currentPage);
        });
        if (pageNumber === currentPage) {
            pageButton.classList.add("active");
        }
        pageNumberSpan.appendChild(pageButton);
    }

    function createEllipsis() {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        ellipsis.classList.add("ellipsis");
        ellipsis.addEventListener("click", () => {
            showAllPages = true;
            updatePaginationButtons();
        });
        pageNumberSpan.appendChild(ellipsis);
    }
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
}

function goToNextPage() {
    if (currentPage < getTotalPages()) {
        currentPage++;
        displayProducts(currentPage);
    }
}

prevBtn.addEventListener("click", goToPreviousPage);
nextBtn.addEventListener("click", goToNextPage);
displayProducts(currentPage);














// const productContainer = document.querySelector(".blog-container");

// // Display all products at once
// function displayAllProducts() {
//     productContainer.innerHTML = "";

//     products.forEach((product) => {
//         const productDiv = document.createElement("div");
//         productDiv.classList.add("product");
//         productDiv.innerHTML = `
//                     <a href="${product.link}">
//                         <div class="column grid grid1">
//                             <img src="${product.image}" alt="${product.name}">
//                             <div class="innercol">
//                                 <p>${product.name}</p>
//                                 <p><b><u>Read More <i class="fa-solid fa-angles-right"></i></u></b></p>
//                             </div>
//                         </div>
//                     </a>
//         `;
//         productContainer.appendChild(productDiv);
//     });
// }

// // Call function to show all products
// displayAllProducts();
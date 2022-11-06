

// ====== Handle Slide Filters =====
const itemFilters = document.querySelectorAll('.filter-option')

itemFilters.forEach(itemFilter => {
    itemFilter.addEventListener("click", () => {

        const itemFilterActive = document.querySelector('.filter-option.active')
        itemFilterActive.classList.remove('active')

        itemFilter.classList.add('active')

    })
})

const filterBlock = document.querySelector(".filters-blocks");
const nextBtnFilter = document.querySelector(".next-tab-filters");
const prevBtnFilter = document.querySelector(".prev-tab-filters");

let counterFilter = 0;

if (prevBtnFilter != null) {
    prevBtnFilter.style.display = 'none';

    prevBtnFilter.addEventListener("click", function () {
        counterFilter = Number(counterFilter += 30);
        nextBtnFilter.style.display = "block"

        if (counterFilter >= Number(-5)) {
            prevBtnFilter.style.display = "none";
            filterBlock.style.left = 0 + "%";

        } else {
            
            filterBlock.style.left = counterFilter + "%";

        }
    });

    nextBtnFilter.addEventListener("click", function () {
        prevBtnFilter.style.display = "block";
        counterFilter = Number(counterFilter -= 30);

        filterBlock.style.left = counterFilter + "%";

        if (filterBlock.clientWidth == 1280) {
            nextBtnFilter.style.display = "none"
        } 

    });
}


// End Handle Slide Filters


/* SEARCH INPUT HEADER */
const searchResponsive = document.querySelector('.search-btn-responsive')
const formResponsive = document.querySelector('.form-responsive')
const closeSearch = document.querySelector('.fa-arrow-left')

searchResponsive.onclick = () => {
    formResponsive.classList.add('active')
}

closeSearch.addEventListener('click', () => {
    formResponsive.classList.remove('active')
})

/* END SEARCH INPUT HEADER */



// Handle Render Tab Channel
const channelsYoutube = [
    {
        "id": 1,
        "links": "detail-youtuber.html",
        "name": "freeCodeCamp.org",
        "avatar-channel": "images/subcriber-channels/freecodecamp-logo.png",
        "counter-register": "6,52 Tr người đăng ký"
    },
    {
        "id": 2,
        "links": "detail-youtuber.html",
        "name": "Traversy Media",
        "avatar-channel": "images/subcriber-channels/traversy-media.jpg",
        "counter-register": "2,52 Tr người đăng ký"

    },
    {
        "id": 3,
        "links": "detail-youtuber.html",
        "name": "OnlyC Production",
        "avatar-channel": "images/subcriber-channels/onlyC.jpg",
        "counter-register": "1,52 Tr người đăng ký"

    },
    {
        "id": 4,
        "links": "detail-youtuber.html",
        "name": "Sơn Tùng M-TP Official",
        "avatar-channel": "images/subcriber-channels/mtp.jpg",
        "counter-register": "9,52 Tr người đăng ký"

    },

    {
        "id": 5,
        "links": "detail-youtuber.html",
        "name": "Merve",
        "avatar-channel": "images/subcriber-channels/merve.jpg",
        "counter-register": "2,52 Tr người đăng ký"

    },
    {
        "id": 6,
        "links": "detail-youtuber.html",
        "name": "Orinn Official",
        "avatar-channel": "images/subcriber-channels/orinn.jpg",
        "counter-register": "4,52 Tr người đăng ký"
    },
    {
        "id": 7,
        "links": "detail-youtuber.html",
        "name": "F8 Official",
        "avatar-channel": "images/subcriber-channels/f8.jpg",
        "counter-register": "999 N người đăng ký"

    },
    {
        "id": 8,
        "links": "detail-youtuber.html",
        "name": "VTV Giải Trí",
        "avatar-channel": "images/subcriber-channels/vtv-giatri.jpg",
        "counter-register": "3,53 Tr người đăng ký"

    },
    {
        "id": 9,
        "links": "detail-youtuber.html",
        "name": "HoleTex",
        "avatar-channel": "images/subcriber-channels/holetex.jpg",
        "counter-register": "1,53 Tr người đăng ký"

    },

    {
        "id": 10,
        "links": "detail-youtuber.html",
        "name": "FPT Bóng Đá",
        "avatar-channel": "images/subcriber-channels/fpt-bongda.jpg",
        "counter-register": "4,53 Tr người đăng ký"

    },
]

const accordionChannel = document.querySelector(".accordion")
const listChannels = channelsYoutube.map((channelYoutube, index) => {
    return `
        <li class="accordion-item">
            <div class="info-youtuber">
                <a href="${channelYoutube.links}" data-name="${channelYoutube.name}" class="info-youtuber link-youtuber" >
                    <img class="info-youtuber__img" src="${channelYoutube["avatar-channel"]}" alt="">
                    <span class="info-youtuber__name">${channelYoutube.name.length > 8 ? channelYoutube.name.slice(0, 17) + "..." : channelYoutube.name}</span>
                </a>
            </div>
        </li>
    `;
}).join('')      
                
accordionChannel.innerHTML = listChannels

// End Handle Render Tabs Channel

// Handle Toggle SideBar  Screen > 920px 
const filters = document.querySelector('.filters')
const largerMain = document.querySelector('.videos')

const menuBar = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')
const sidebarSmall = document.querySelector('.small-sidebar')


const sideBarHome = document.querySelector('.sidebar-toggle-home')
const menuBarToggleHome = document.querySelector('.bar-icon-home')
const modalHomeToggle = document.querySelector('.modal-sidebar-home')

menuBar.addEventListener("click", filterItems)

const handleToggle = () => {
    if (sidebarSmall != null) {
        if (sidebarSmall.classList.contains('disable')) {
            sidebarSmall.classList.remove('disable')
            sidebar.classList.add('disable')
            if (largerMain != null) {
                largerMain.classList.add('larger')
            }
    
        } else {
            sidebarSmall.classList.add('disable')
            sidebar.classList.remove('disable')
            if (largerMain != null) {
                largerMain.classList.remove('larger')
            }
        }    
    }

} 

menuBar.addEventListener('click', handleToggle)

function filterItems() {
    if (filters != null) {
        filters.classList.toggle('active')
    }
}

menuBar.addEventListener("click", () => {
    if(window.innerWidth <= 1350)  {
        if (filters != null) {
            filters.classList.remove('active')
        }
    }

})
// Handle Toggle SideBar  Screen > 920px 


// Handle SideBar Toggle Home
menuBar.addEventListener("click", () => {
    if (window.innerWidth <= 1350) {
        if (sideBarHome != null) {
            sideBarHome.classList.add('active')
            modalHomeToggle.classList.add('active')
        }
    } 
    
})

if (menuBarToggleHome != null) {
    menuBarToggleHome.addEventListener("click", () => {
        sideBarHome.classList.remove('active')
        modalHomeToggle.classList.remove('active')
    
    })
}


document.querySelector('html').addEventListener("click", (e) => {
    if (e.target === modalHomeToggle) {
        sideBarHome.classList.remove('active')
        modalHomeToggle.classList.remove('active')
    }
})

if (sideBarHome != null) {
    window.onresize = () => {
        sideBarHome.classList.remove('active')
        modalHomeToggle.classList.remove('active')
    
    }
}



const btnSidebarHome = document.querySelector('#links-toggle-home')
const subscriberContentHome = document.querySelector('.subscribe-content-home')
const iconArrowHome = document.querySelector('.icon-readmore-home')
const readMoreHome = document.querySelector('#read-more-home')

if (btnSidebarHome != null) {

    btnSidebarHome.addEventListener("click", (e) => {
    
        if (iconArrowHome.classList.contains('active')) {
            iconArrowHome.classList.remove('active')
            subscriberContentHome.classList.remove('active')
            readMoreHome.innerHTML = "Hiển thị thêm"
    
        } else {
            iconArrowHome.classList.add('active')
            subscriberContentHome.classList.add('active')
            readMoreHome.innerHTML = "Ẩn bớt"
            
        }
            
    })
}

// End SideBar Toggle Home


// Function Toggle Links
const toggleShowScriber = (checkActive, checkReadMore, checkSidebar) => {
    if (checkActive != null) {
        if (checkActive.classList.contains('active')) {
            checkActive.classList.remove('active')
            checkReadMore.innerHTML = "Hiển thị thêm"
            checkSidebar.style.overflowY = 'hidden'
    
        } else {
            checkActive.classList.add('active')
            checkReadMore.innerHTML = "Ẩn bớt"
            checkSidebar.style.overflowY = 'scroll'
    
        }
    }
}

// End Function Toggle Links


// Handle ViewMore Or Hidden Of Subscriber
const iconArrow = document.querySelector('.icon-readmore')
const sideBar = document.querySelector('.sidebar')
const accordionToggle = document.querySelector('.links-toggle')
const readMore = document.querySelector('.readmore')
const subscriberContent = document.querySelector('.subscribe-content')

accordionToggle.onclick = (e) => {
    e.preventDefault();

    toggleShowScriber(subscriberContent, readMore, sideBar);
    if (iconArrow.classList.contains('active')) {
        iconArrow.classList.remove('active')
        if (subscriberContent !== null) {
            subscriberContent.classList.remove('active')
            
        }
            
    } else {
        iconArrow.classList.add('active')
        subscriberContent.classList.add('active')
    }
}

// End Handle ViewMore Or Hidden Of Subscriber

// Handle Render List Videos
const videos = [
    {
        link: 'detail-videos.html',
        title: 'Learn HTML & CSS – Full Course for Beginners 2022',
        avatar: 'images/tiktok.png',
        videoTimer: '3:50:59',
        img: 'https://i.ytimg.com/vi/a_iQb1lnAEQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsvftpCvVFB4XMJpZZ-uKzi5Ts-Q',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '134 N lượt xem',
            'store-time': '3 tháng trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: '3 HOUR STUDY WITH ME | Background noise, Rain Sounds,...',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '1:50:15',
        img: 'https://i.ytimg.com/vi/1ex_bNIFR1A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf942i1knY6MpRyykVLeAE-uDXjQ',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '73 N lượt xem',
            'store-time': '4 tuần trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: 'Thư giãn chống căng thẳng và lo âu | Năng lượng tích cực',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '11:55:28',
        img: 'https://i.ytimg.com/vi/6r7P1kr99Hw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTBBaubxe0i1LtBu5X8j5unt8nuw',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '663.979 lượt xem',
            'store-time': '2 tháng trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: 'HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌅 / relaxing jazz',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '4:25:12',
        img: 'https://i.ytimg.com/vi/7JPTlqRRf1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRd1KvhwMw1DnNirPRcQQcIXdyKg',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '1.812.314 lượt xem',
            'store-time': '1 năm trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: 'Meilleures chansons classiques chinoises immortelles',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '3:50:59',
        img: 'https://i.ytimg.com/vi/-sF0r7U8j4o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUtEtYSeKlyiKQROiyjDEUlzrV-A',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '134 N lượt xem',
            'store-time': '4 tuần trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: 'Những Bản Piano Cover Cảm Xúc Nhất Của An Coong || An Coong 2020',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '1:50:15',
        img: 'https://i.ytimg.com/vi/rHKCWKZA6RI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu-bIvcUuhm0X0gXrazhb09LbagQ',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '73 N lượt xem',
            'store-time': '4 tuần trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: 'Visual Studio Code 2022 | Web Dev Setup | Top Extensions, Themes, Settings, Tips & Tricks',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '11:55:28',
        img: 'https://i.ytimg.com/vi/fJEbVCrEMSE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA7nVprELcbAgofz9ljaNpwk7j_g',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '663.979 lượt xem',
            'store-time': '2 tháng trước'
        },
    },
    {
        link: 'detail-videos.html',
        title: 'Canada 4K - Relaxing Music Along With Beautiful Nature Videos (4K Video Ultra HD)',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        videoTimer: '4:25:12',
        img: 'https://i.ytimg.com/vi/VVj72fK2bvg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApX5wGuhOdYoBFZMoreDstyE2uAg',
        chanelName: 'freeCodeCamp.org',
        metaLine: {
            'store-viewer': '1.812.314 lượt xem',
            'store-time': '1 năm trước'
        },
    }
];


const listItemVideo = videos.map(video => {
        
    return `<div class="item-video">
                <a href="${video.link}" class="item-video__media">
                    <div class="video-timer">
                        <span>${video.videoTimer}</span>
                    </div>
                    <img width="280" height="180" src="${video.img}" alt="">
                </a>
                <div class="item-video__details">
                    <a href="detail-youtuber.html" title="freeCodeCamp.org" class="video-details__avatar">
                        <img src="${video.avatar}" alt="">
                    </a>
                    <div class="video-details__meta"> 
                        <h3 class="video-meta-title">
                            <a href="detail-videos.html" title="Learn JavaScript - Full Course for Beginners">${video.title}</a>
                        </h3>
                        <div class="video-meta-block">
                            <div class="channel-name">
                                <span>${video.chanelName}</span>
                            </div>
                            <div class="meta-data-line">
                                <span class="store-viewer">${video.metaLine["store-viewer"]}</span>
                                <span class="store-time">${video.metaLine["store-time"]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        
}).join('');

const containerListVideos = document.querySelector('.container-list-videos')
const listVideos = document.querySelector('.list-videos')


if (listVideos != null) {
    listVideos.innerHTML = listItemVideo

    let lengthListVideo = 1;
    for (let index = 0; index < lengthListVideo; index++) {
        listVideos.innerHTML += listVideos.innerHTML;
        
    }

    containerListVideos.appendChild(listVideos) 
}


// End Handle Render List Videos
       
// Handle SideBar Toggle Of Index.html

const accordionToggleHome = document.querySelector('.accordion-video-home')
const listChannelsHome = channelsYoutube.map((item, index) => {
    return `
        <li class="accordion-item">
            <div class="info-youtuber">
                <a href="${item.links}" data-name="${item.name}" data-avatar="${item["avatar-channel"]}" data-count="${item["counter-register"]}" class="info-youtuber link-youtuber" >
                    <img class="info-youtuber__img" src="${item["avatar-channel"]}" alt="">
                    <span class="info-youtuber__name">${item.name.length > 6 ? item.name.slice(0, 13) + "..." : item.name}</span>
                </a>
            </div>
        </li>
    `;
}).join('');      


if (accordionToggleHome != null) {
    accordionToggleHome.innerHTML = listChannelsHome

}


export { searchResponsive, formResponsive, closeSearch, sidebarSmall, sidebar, sideBarHome, menuBarToggleHome, menuBar, modalHomeToggle, btnSidebarHome, subscriberContentHome, iconArrowHome, readMoreHome }


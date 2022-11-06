import { searchResponsive, formResponsive, closeSearch, sidebarSmall, sidebar, menuBarToggleHome, menuBar, modalHomeToggle}  from "../js/main.js";

const channelUser = document.querySelector('.wrapper-channel')
const bodyElement = document.querySelector('.wrapper-body')
const tabsChannel = document.querySelector('.container-tabs')

function handleToggleSideBar() {
        if (sidebarSmall.classList.contains('disable')) {
            channelUser.classList.remove('active')
            bodyElement.classList.remove('active')
            tabsChannel.classList.remove('active')
        } else {
            channelUser.classList.add('active')
            bodyElement.classList.add('active')
            tabsChannel.classList.add('active')
    
        }    
}

menuBar.addEventListener("click", handleToggleSideBar)

menuBar.addEventListener("click", () => {
    if(window.innerWidth <= 1350) {
        if (channelUser.classList.contains('active') || bodyElement.classList.add('active') || tabsChannel.classList.remove('active')) {
            channelUser.classList.remove('active')
            bodyElement.classList.remove('active')
            tabsChannel.classList.remove('active')
        } 

    }
})
    




// Handle Tabs Channel

const tabs = document.querySelectorAll('.tab-channel')
const panels = document.querySelectorAll('.panel')
const tabActive = document.querySelector('.tab-channel.active')
const line = document.querySelector('.tabs-content .line')


function lineActive(lineElement, tabActive) {
    lineElement.style.left = tabActive.offsetLeft + document.body.scrollLeft + "px";
    lineElement.style.width = tabActive.offsetWidth + 'px'
}

lineActive(line, tabActive)

tabs.forEach((tab, index) => {
    const panel = panels[index]
    tab.onclick = function() {
        const tabActive = document.querySelector('.tab-channel.active')
        const panelActive = document.querySelector('.panel.active')

        tabActive.classList.remove('active')
        panelActive.classList.remove('active')

        lineActive(line, this)
        
        tab.classList.add('active')
        panel.classList.add('active')

    }
})


// Handle next prev Tabs
const tabContent = document.querySelector(".tabs-content");
const nextBtn = document.querySelector(".next-tabs");
const prevBtn = document.querySelector(".prev-tabs");
const btnSearchTab = document.querySelector('.btn-search-channel')
// Handle Search Tabs 
const inputSearchTab = document.querySelector(".input-search-channel input[type='text']")

btnSearchTab.addEventListener("click", () => {

    inputSearchTab.classList.add('active')
    inputSearchTab.focus()

    tabContent.classList.add('active')
})
// End Handle Search Tabs 

let counter = 0;
prevBtn.style.display = "none";

prevBtn.addEventListener("click", function () {
    counter = Number(counter += 7);
    nextBtn.style.display = "block"

    if (counter >= Number(-5)) {
        prevBtn.style.display = "none";
        tabContent.style.left = 0 + "%";

    } else {
        
        tabContent.style.left = counter + "%";

    }
});

nextBtn.addEventListener("click", function () {
    prevBtn.style.display = "block";
    counter = Number(counter -= 7);

    tabContent.style.left = counter + "%";


    if (tabContent.clientWidth == 1060 || tabContent.clientWidth == 860) {
        nextBtn.style.display = "none"

    } else {
    tabContent.style.left = counter + "%";

    }
   
});


// End handle next Prev Tabs



// List Video Home
const listVideosHome = [
    {
        "id": 1,
        "img": "https://media.istockphoto.com/photos/team-of-ants-works-constructing-bridge-picture-id1314004565?b=1&k=20&m=1314004565&s=170667a&w=0&h=EkOwKrbBxQfF1w1EpJL9Cfm6dh0gx5rCOPVi7p3jZYY=",
        "title": "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash",
        "timer": "1:20:30",
        "view": "1 Tr lượt xem",
        "time-ago": "3 tháng trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 2,
        "img": "https://media.istockphoto.com/photos/close-up-woman-hand-hold-using-smart-phone-with-heart-icon-at-outdoor-picture-id1340024049?b=1&k=20&m=1340024049&s=170667a&w=0&h=u2OlZdzn-88Q5qv3Z757JFv9HJ4gw5DiSccxgEJGaqk=",
        "title": "Unsplash has images that capture the style of all the major apps: Instagram, Facebook, Flickr, and more.",
        "timer": "20:30",
        "view": "2 Tr lượt xem",
        "time-ago": "3 năm trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 3,
        "img": "https://media.istockphoto.com/photos/people-registering-for-the-conference-event-picture-id1385168396?b=1&k=20&m=1385168396&s=170667a&w=0&h=wI7fSyawKSlgPXVPSYNpcmnjY_M5tzacLSv_8FEYvvY=",
        "title": "Parties. Concerts. Festivals. Unsplash's curated selection of events photos captures the verve",
        "timer": "1:20:30",
        "view": "2 Tr lượt xem",
        "time-ago": "4 tháng trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 4,
        "img": "https://media.istockphoto.com/photos/blue-human-brain-lifting-weight-picture-id1363798150?b=1&k=20&m=1363798150&s=170667a&w=0&h=fSaPTXBukwN2-DY4U8MgO8E33eRIXmuhBMnkb8u6PrQ=",
        "title": "Don't get caught up in your feelings. Instead, take advantage of a gorgeous selection of photos",
        "timer": "2:20:30",
        "view": "5 Tr lượt xem",
        "time-ago": "5 tháng trước",
        "main-title": "Alo"
    },
    {
        "id": 5,
        "img": "https://media.istockphoto.com/photos/airplane-flying-on-tropical-summer-vacation-picture-id1282610198?b=1&k=20&m=1282610198&s=170667a&w=0&h=6tOZ20F7zn_nmnTHKfJUOxv9BYU1dAYBt8xTb8FM9X4=",
        "title": "We come across many of life's most beautiful images while travelling.",
        "timer": "30:20",
        "view": "5 Tr lượt xem",
        "time-ago": "10 tháng trước",
        "main-title": "Video "
    },
]

let listPlayVideoHome = document.querySelector('.list-main-item')
let listVideoHome = listVideosHome.map((item, index) => {
   return `
        <div class="home-main-item">
            <div class="main-item-content">
                <div class="item-video-main">
                    <div class="thumbnail-video-main">
                        <a href="detail-videos.html">
                            <img class="main-item-video__img" width="180" height="100" src="${item.img}" alt="${item.title.slice(0, 50) + "..."}">
                            <span class="main-item-video__timer">${item.timer}</span>
                        </a>
                    </div>
                    <div class="title-video-main">
                        <a href="detail-videos.html">
                            ${item.title.slice(0, 36) + "..."}
                        </a>
                    </div>
                    <div class="other-channel-main">
                        <span>${item["time-ago"]}</span>
                        <span style="font-size: 19px">&#183;</span>
                        <span>${item.view}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

}).join('');

listPlayVideoHome.innerHTML = listVideoHome;


// End List Video Home



const listMainHome = document.querySelector('.list-home-main')
let homeMain = document.querySelector('.home-main')

let lengthItem = 2;
for (let index = 0; index < lengthItem; index++) {
    homeMain.innerHTML += homeMain.innerHTML;
    
}

listMainHome.appendChild(homeMain) 


const titleHomeItems = document.querySelectorAll('.main-item-header__title')


function loadTitleMain(titleLoad) {
    const videoUpload = "Video tải lên"
    const videoPublic = "Video tải lên phổ biến"
    const listVideoCreated =  "Danh sách video đã tạo"
    const shorts = "Shorts"
    
    window.addEventListener('DOMContentLoaded', (event) => {
        titleLoad[0].innerHTML = videoUpload
        titleLoad[1].innerHTML = videoPublic
        titleLoad[2].innerHTML = listVideoCreated
        titleLoad[3].innerHTML = shorts
    });
}
loadTitleMain(titleHomeItems);

// End List Home Channel


// List Video Channel
const ApiChannelVideos = [
    {
        "id": 1,
        "img": "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
        "title": "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash",
        "timer": "1:20:30",
        "view": "1 Tr lượt xem",
        "time-ago": "3 tháng trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 2,
        "img": "https://media.istockphoto.com/photos/saguaro-sunset-silhouette-picture-id1352918375?b=1&k=20&m=1352918375&s=170667a&w=0&h=-heOlAH048PFHGGVbg0Yvqp2CtB7UaHUra2wPGdpDg0=",
        "title": "Unsplash has images that capture the style of all the major apps: Instagram, Facebook, Flickr, and more.",
        "timer": "20:30",
        "view": "2 Tr lượt xem",
        "time-ago": "3 năm trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 3,
        "img": "https://media.istockphoto.com/photos/data-stream-picture-id1384378940?b=1&k=20&m=1384378940&s=170667a&w=0&h=A5SwV0U8TeKznc7k5T_1dCw32ozDB1WbM5cpvpiZZRg=",
        "title": "Parties. Concerts. Festivals. Unsplash's curated selection of events photos captures the verve",
        "timer": "1:20:30",
        "view": "2 Tr lượt xem",
        "time-ago": "4 tháng trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 4,
        "img": "https://media.istockphoto.com/photos/fluffy-clouds-shelter-under-white-snow-sheltered-by-forests-and-picture-id1350413298?b=1&k=20&m=1350413298&s=170667a&w=0&h=9Smjx4oLa_L_3PBjijtd86GVczI8FVw6dgJaek_hBY8=",
        "title": "Don't get caught up in your feelings. Instead, take advantage of a gorgeous selection of photos",
        "timer": "2:20:30",
        "view": "5 Tr lượt xem",
        "time-ago": "5 tháng trước",
        "main-title": "Alo"
    },
    {
        "id": 5,
        "img": "https://media.istockphoto.com/photos/sliced-figure-picture-id1300035600?b=1&k=20&m=1300035600&s=170667a&w=0&h=_AOKQ_Xnt9CTSYPxao52DUuxtYi9JX8JKz3Hht31IPs=",
        "title": "We come across many of life's most beautiful images while travelling.",
        "timer": "30:20",
        "view": "5 Tr lượt xem",
        "time-ago": "10 tháng trước",
        "main-title": "Video "
    },
]

const listChannelVideo = ApiChannelVideos.map(item => {
    return `
        <div class="home-main-item">
            <div class="main-item-content">
                <div class="item-video-main">
                <div class="thumbnail-video-main">
                    <a href="detail-videos.html">
                        <img class="main-item-video__img" width="180" height="100" src="${item.img}" alt="${item.title.slice(0, 50) + "..."}">
                        <span class="main-item-video__timer">${item.timer}</span>
                    </a>
                </div>
                <div class="title-video-main">
                    <a href="detail-videos.html">
                        ${item.title.slice(0, 50) + "..."}
                    </a>
                </div>
                    <div class="other-channel-main">
                        <span>${item["time-ago"]}</span>
                        <span style="font-size: 19px">&#183;</span>
                        <span>${item.view}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}).join('')

const listVideosChannel = document.querySelector('.list-video-item')

listVideosChannel.innerHTML = listChannelVideo


const listMainVideo = document.querySelector('.list-video-main')
let videoMain = document.querySelector('.video-main')

let lengthListVideo = 2;
for (let index = 0; index < lengthListVideo; index++) {
    videoMain.innerHTML += videoMain.innerHTML;
    
}

listMainVideo.appendChild(videoMain) 

const titleVideoItems = document.querySelectorAll('.video-item-header__title')
loadTitleMain(titleVideoItems);
// End List Video Channel


// List Play Channel
const ApiChannelPlays = [
    {
        "id": 1,
        "img": "https://media.istockphoto.com/photos/natural-agriculture-picture-id1127133304?b=1&k=20&m=1127133304&s=170667a&w=0&h=jFxuoXQ3vvLj-K8iz9voS1l71DjvMVUTwey75bZNC70=",
        "title": "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash",
        "timer": "1:20:30",
        "view": "1 Tr lượt xem",
        "time-ago": "3 tháng trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 2,
        "img": "https://media.istockphoto.com/photos/technology-symbols-on-hexagon-network-with-polygon-graphic-abstract-picture-id1251263531?b=1&k=20&m=1251263531&s=170667a&w=0&h=rQKLpKux3yBVGWMCbuiERZ8BT9ilpkjn7QjP2AUxjJA=",
        "title": "Unsplash has images that capture the style of all the major apps: Instagram, Facebook, Flickr, and more.",
        "timer": "20:30",
        "view": "2 Tr lượt xem",
        "time-ago": "3 năm trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 3,
        "img": "https://media.istockphoto.com/photos/bitcoin-network-concept-on-digital-screen-picture-id1297465792?b=1&k=20&m=1297465792&s=170667a&w=0&h=w4ADFjvxsfswEwKcsX1QZNVlBaXmPyYbzF13iuUggm0=",
        "title": "Parties. Concerts. Festivals. Unsplash's curated selection of events photos captures the verve",
        "timer": "1:20:30",
        "view": "2 Tr lượt xem",
        "time-ago": "4 tháng trước",
        "main-title": "Video tải lên"
    },
    {
        "id": 4,
        "img": "https://media.istockphoto.com/photos/online-shopping-and-delivery-services-concept-with-motor-scooter-on-picture-id1343822386?b=1&k=20&m=1343822386&s=170667a&w=0&h=cvL5hy2OLi-D5NuzcV5Qb9PYtno6V-Kzh05drc0Cuec=",
        "title": "Don't get caught up in your feelings. Instead, take advantage of a gorgeous selection of photos",
        "timer": "2:20:30",
        "view": "5 Tr lượt xem",
        "time-ago": "5 tháng trước",
        "main-title": "Alo"
    },
    {
        "id": 5,
        "img": "https://media.istockphoto.com/photos/white-lines-and-spheres-picture-id1135638647?b=1&k=20&m=1135638647&s=170667a&w=0&h=j32QwPBMCmdX9ViKWvitis6N3l3Wl-lBEl1Ut9ImiBk=",
        "title": "We come across many of life's most beautiful images while travelling.",
        "timer": "30:20",
        "view": "5 Tr lượt xem",
        "time-ago": "10 tháng trước",
        "main-title": "Video "
    },
]

const listChannelPlay = ApiChannelPlays.map(item => {
    return `
        <div class="home-main-item">
            <div class="main-item-content">
                <div class="item-video-main">
                <div class="thumbnail-video-main">
                    <a href="detail-videos.html">
                        <img class="main-item-video__img" width="180" height="100" src="${item.img}" alt="${item.title.slice(0, 50) + "..."}">
                        <span class="main-item-video__timer">${item.timer}</span>
                    </a>
                </div>
                <div class="title-video-main">
                    <a href="detail-videos.html">
                        ${item.title.slice(0, 50) + "..."}
                    </a>
                </div>
                    <div class="other-channel-main">
                        <span>${item["time-ago"]}</span>
                        <span style="font-size: 19px">&#183;</span>
                        <span>${item.view}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}).join('')

const listPlaysChannel = document.querySelector('.list-play-item')

listPlaysChannel.innerHTML = listChannelPlay


const listMainPlay = document.querySelector('.list-play-main')
let playMain = document.querySelector('.play-main')

let lengthListPlay = 2;
for (let index = 0; index < lengthListPlay; index++) {
    playMain.innerHTML += playMain.innerHTML;
    
}

listMainPlay.appendChild(playMain) 

let titlePlayItems = document.querySelectorAll('.play-item-header__title')
loadTitleMain(titlePlayItems = "Danh sách video đã tạo");

// End List Play Channel

// 
// const sideBarToggle = document.querySelector('.sidebar-toggle ') 
// const menuBarToggle = document.querySelector('.menu-icon-toggle')
// const modalBarToggle = document.querySelector('.modal-sidebar-toggle')


// menuBar.addEventListener("click", () => {
//     if (window.innerWidth <= 1320) {
//         sideBarToggle.classList.add('active')
//         modalBarToggle.classList.add('active')
//     }
// })

// menuBarToggle.addEventListener('click', () => {
//     sideBarToggle.classList.remove('active')
//     modalBarToggle.classList.remove('active')

// })

// document.querySelector('html').addEventListener("click", (e) => {
//     if (e.target === modalBarToggle) {
//         modalBarToggle.classList.remove('active')
//         sideBarToggle.classList.remove('active')
//     }
// })

// window.onresize = () => {
//     sideBarToggle.classList.remove('active')
//     modalBarToggle.classList.remove('active')

// }


// Handle SideBar 
// const menuBarChannel = document.querySelector('.menu-icon-channel') 
// const sidebarChannel = document.querySelector('.sidebar-channel')


// if (menuBarChannel != null) {
//     menuBarChannel.addEventListener("click", () => {
    
//         if (window.innerWidth > 1320) {
//             sidebarChannel.classList.toggle('hidden')
//             channelUser.classList.toggle('active')
//             bodyElement.classList.toggle('active')
//             tabsChannel.classList.toggle('active')
//         } else {
//             sidebarChannel.classList.add('hidden')
//             channelUser.classList.add('active')
//             bodyElement.classList.add('active')
//             tabsChannel.classList.add('active')
//         }
    
//     })
// }




// End Handle SideBar

// const accordionToggleUser = document.querySelector('.accordion-toggle')
// const listChannelUsers = channelsYoutube.map((channelItem, index) => {
//     return `
//         <li class="accordion-item">
//             <div class="info-youtuber">
//                 <a href="${channelItem.links}" data-name="${channelItem.name}" data-avatar="${channelItem["avatar-channel"]}" data-count="${channelItem["counter-register"]}" class="info-youtuber link-youtuber" >
//                     <img class="info-youtuber__img" src="${channelItem["avatar-channel"]}" alt="">
//                     <span class="info-youtuber__name">${channelItem.name.length > 6 ? channelItem.name.slice(0, 13) + "..." : channelItem.name}</span>
//                 </a>
//             </div>
//         </li>
//     `;
// }).join('');      


// if (accordionToggleUser != null) {
//     accordionToggleUser.innerHTML = listChannelUsers
//     accordionChannel.innerHTML = listChannelUsers

// }

// const channelItems = document.querySelectorAll('.link-youtuber');
// const titleChannel = document.querySelector('.title-banner')
// const userChannel = document.querySelector('.ytb-channel-name')
// const avatarChannel = document.querySelector('.avatar-channeler')
// const counterChannel = document.querySelector('.subscriber-count')

// if (channelItems != null) {
//     channelItems.forEach(item => {
//         item.addEventListener("click", (e) => {
//             e.preventDefault()
//                 titleChannel.innerHTML = item.getAttribute("data-name")
//                 userChannel.innerHTML = item.getAttribute("data-name")
//                 avatarChannel.src = item.getAttribute("data-avatar")
//                 counterChannel.innerHTML = item.getAttribute("data-count")
            
//         });
//     })
    
// }



// Handle SideBar Toggle
// const sidebarToggle =  document.querySelector('#link-detail-video')
// const btnSidebarToggle = document.querySelector('#link-sidebar-toggle')
// const readMoreToggle = document.querySelector('#readmore-toggle')
// const subscriberContentSidebar = document.querySelector('.subscribe-content-toggle')
// const iconArrowToggle = document.querySelector('.icon-readmore-toggle')

// if (menuBarChannel != null) {
//     btnSidebarToggle.addEventListener("click", (e) => {
//         toggleShowScriber(subscriberContentSidebar, readMoreToggle, sidebarToggle)
//         if (iconArrowToggle.classList.contains('active')) {
//             iconArrowToggle.classList.remove('active')
//             subscriberContentSidebar.classList.remove('active')
    
//         } else {
//             iconArrowToggle.classList.add('active')
//             subscriberContentSidebar.classList.add('active')
    
//         }
            
//     })
    
// }

//End Handle SideBar Toggle

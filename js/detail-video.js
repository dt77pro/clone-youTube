import { searchResponsive, formResponsive, closeSearch, menuBar, sideBarHome, modalHomeToggle, btnSidebarHome, subscriberContentHome, iconArrowHome, readMoreHome }  from "../js/main.js";

    if(sideBarHome.classList.contains('active')) {
        sideBarHome.classList.remove('active')
        modalHomeToggle.classList.remove('active')
    }

    menuBar.addEventListener("click", () => {
        sideBarHome.classList.add('active')
        modalHomeToggle.classList.add('active')

    })

const apiListVideos = [
    {
        "id": 1,
        "img": "https://i.ytimg.com/vi/rHKCWKZA6RI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu-bIvcUuhm0X0gXrazhb09LbagQ",
        "name": "Merve",
        "video-timer": "5:10",
        "title": "How I Trained Myself to Study Long Hours (Even When I Don't Want To)",
        "view": "1,9 Tr lượt xem",
        "time-ago": "8 tháng trước"

    },

    {
        "id": 2,
        "img": "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Romeo",
        "video-timer": "25:10",
        "title": "How I Trained Myself to Study Long jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7] (Even When I Don't Want To)",
        "view": "1,5 Tr lượt xem",
        "time-ago": "5 tháng trước"

    },

    {
        "id": 3,
        "img": "https://plus.unsplash.com/premium_photo-1661956245111-fa8cca3f31e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Juliet",
        "video-timer": "2:30:30",
        "title": "Highlights T1 vs JDG [GAME 1] [Vòng Bán Kết - Ngày 1 - CKTG 2022][30.10.2022]",
        "view": "1,3 Tr lượt xem",
        "time-ago": "3 tháng trước"

    },

    {
        "id": 4,
        "img": "https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Merve",
        "video-timer": "1:20:30",
        "title": "How I Trained 4 HOUR STUDY WITH ME on a RAINY NIGHT | Background noise, Rain Sounds, 10-min break, No Music to Study Long Hours (Even When I Don't Want To)",
        "view": "1,8 Tr lượt xem",
        "time-ago": "7 tháng trước"

    },

    {
        "id": 5,
        "img": "https://i.ytimg.com/vi/rHKCWKZA6RI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu-bIvcUuhm0X0gXrazhb09LbagQ",
        "name": "Merve",
        "video-timer": "5:10",
        "title": "How I Trained Myself to Study Long Hours (Even When I Don't Want To)",
        "view": "1,9 Tr lượt xem",
        "time-ago": "8 tháng trước"

    },

    {
        "id": 6,
        "img": "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Romeo",
        "video-timer": "25:10",
        "title": "How I Trained Myself to Study Long jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7] (Even When I Don't Want To)",
        "view": "1,5 Tr lượt xem",
        "time-ago": "5 tháng trước"

    },

    {
        "id": 7,
        "img": "https://plus.unsplash.com/premium_photo-1661956245111-fa8cca3f31e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Juliet",
        "video-timer": "2:30:30",
        "title": "Highlights T1 vs JDG [GAME 1] [Vòng Bán Kết - Ngày 1 - CKTG 2022][30.10.2022]",
        "view": "1,3 Tr lượt xem",
        "time-ago": "3 tháng trước"

    },

    {
        "id": 8,
        "img": "https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Merve",
        "video-timer": "1:20:30",
        "title": "How I Trained 4 HOUR STUDY WITH ME on a RAINY NIGHT | Background noise, Rain Sounds, 10-min break, No Music to Study Long Hours (Even When I Don't Want To)",
        "view": "1,8 Tr lượt xem",
        "time-ago": "7 tháng trước"

    },
    {
        "id": 9,
        "img": "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Romeo",
        "video-timer": "25:10",
        "title": "How I Trained Myself to Study Long jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7] (Even When I Don't Want To)",
        "view": "1,5 Tr lượt xem",
        "time-ago": "5 tháng trước"

    },

    {
        "id": 10,
        "img": "https://plus.unsplash.com/premium_photo-1661956245111-fa8cca3f31e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Juliet",
        "video-timer": "2:30:30",
        "title": "Highlights T1 vs JDG [GAME 1] [Vòng Bán Kết - Ngày 1 - CKTG 2022][30.10.2022]",
        "view": "1,3 Tr lượt xem",
        "time-ago": "3 tháng trước"

    },
    {
        "id": 11,
        "img": "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Romeo",
        "video-timer": "25:10",
        "title": "How I Trained Myself to Study Long jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7] (Even When I Don't Want To)",
        "view": "1,5 Tr lượt xem",
        "time-ago": "5 tháng trước"

    },

    {
        "id": 12,
        "img": "https://plus.unsplash.com/premium_photo-1661956245111-fa8cca3f31e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Juliet",
        "video-timer": "2:30:30",
        "title": "Highlights T1 vs JDG [GAME 1] [Vòng Bán Kết - Ngày 1 - CKTG 2022][30.10.2022]",
        "view": "1,3 Tr lượt xem",
        "time-ago": "3 tháng trước"

    }

];


const userComments = [
    {
        "id": 1,
        "avatar-auth": "images/avatar.jpg",
        "user-img": "images/subcriber-channels/f8.jpg",
        "name": "F8 Office",
        "time-ago": "1 tháng trước",
        "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel ipsum voluptate laudantium? Praesentium quaerat tempora quas nam maiores?",
        "qty-like": 300

    },
    {
        "id": 2,
        "avatar-auth": "images/avatar.jpg",
        "user-img": "images/subcriber-channels/traversy-media.jpg",
        "name": "Traversy",
        "time-ago": "2 tháng trước",
        "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel ipsum voluptate laudantium? Praesentium quaerat tempora quas nam maiores?",
        "qty-like": 500

    },
    {
        "id": 3,
        "avatar-auth": "images/avatar.jpg",
        "user-img": "images/subcriber-channels/orinn.jpg",
        "name": "Orinn",
        "time-ago": "3 tháng trước",
        "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel ipsum voluptate laudantium? Praesentium quaerat tempora quas nam maiores?",
        "qty-like": 700

    },
    {
        "id": 4,
        "avatar-auth": "images/avatar.jpg",
        "user-img": "images/subcriber-channels/onlyC.jpg",
        "name": "OnlyC",
        "time-ago": "5 tháng trước",
        "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel ipsum voluptate laudantium? Praesentium quaerat tempora quas nam maiores?",
        "qty-like": 900

    },
    {
        "id": 5,
        "avatar-auth": "images/avatar.jpg",
        "user-img": "images/subcriber-channels/vtv-giatri.jpg",
        "name": "Vtv Giải Trí",
        "time-ago": "7 tháng trước",
        "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel ipsum voluptate laudantium? Praesentium quaerat tempora quas nam maiores?",
        "qty-like": 1000

    }

];



// FUNCTION StopPropagation 
const body = document.querySelector('html')

function stopPropagation(btnStopProp, dropContent, [activeDrop, restDrop]) {
    btnStopProp.addEventListener("click", function(e) {
        e.stopPropagation();
        dropContent.classList.toggle('active')
        activeDrop.classList.remove('active')
        if (restDrop == undefined) {
            restDrop.classList.remove('active')

        }
        
    })
    body.addEventListener("click", function() {
        dropContent.classList.remove('active')

    })
}

// End Function StopPropagation

// Handle List Videos Others
const columnListVideos = document.querySelector('.column')

const apiListVideo = apiListVideos.map(item => {

    return `<div style="cursor: pointer" class="items-video">
        <div class="thumbnail-renderer">
            <img src="${item.img}" alt="">
            <span class="video-timer" style="bottom: 3px;">${item["video-timer"]}</span>
        </div>
        <div class="content-renderer-video">
            <h3 class="title-renderer-video">${item.title.slice(0, 45) + "..."} </h3>
            <div class="info-renderer-video">
                <span class="name-renderer-video">${item.name}</span>
                <div class="view-time-video">
                    <span>${item.view}</span>
                    <span style="width: 25px; height: 25px";>&#183;</span>
                    <span>${item["time-ago"]}</span>
                </div>
            </div>
        </div>
        <div class="actions-videos-others">
            <button class="btn-video-other">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div class="dropdown-action-contents">
                <div class="menu-dropdown-content-add item-drop-other">
                    <i class="fa-solid fa-list-check"></i>
                    <span>Thêm vào danh sách chờ</span>
                </div>
                <div class="menu-dropdown-content-share item-drop-other">
                    <i class="fa-solid fa-share"></i>
                    <span>Chia sẻ</span>
                </div>
                <div class="menu-dropdown-content-share item-drop-other">
                    <i class="fa-solid fa-arrow-down"></i>
                    <span>Tải xuống</span>
                </div>
            </div>
        </div>
    </div>`;
    
}).join('');

if (columnListVideos != null) {
    columnListVideos.innerHTML = apiListVideo;

}


// End Handle List Videos Others

// Handle Render List User Comment
const commentThreadRenderer = document.querySelector('.comment-thread-renderer');
const userComment = userComments.map(item => {
    return `
        <div class="user-output-content">
            <div class="user-thumbnail avatar-user">
                <img src="${item["user-img"]}" alt="">
            </div>
            <div class="user-main-comment">
                <div class="header-content-comment">
                    <a href="#" class="name-user" style="font-weight: bold;">${item.name}</a>
                    <span>${item["time-ago"]}</span> 
                </div>
                <div class="body-content-comment">
                    ${item.body}
                </div>
                <div class="user-actions-comment" style="cursor: pointer;">
                    <div><i style="padding-right: 10px;" class="fa-solid fa-thumbs-up like-comment-user"></i><span>${item["qty-like"]}</span></div>
                    <div><i class="fa-solid fa-thumbs-down"></i></div>
                    <button>PHẢN HỒI</button>
                </div>
                <div class="feedback-comment">
                    <div class="thumbnail-mine-comment">
                        <div class="avatar-mine">
                            <img src="${item["avatar-auth"]}" alt="">
                        </div>
                        <div class="main-mine-comment">
                            <div class="write-content">
                                <input class="value-comment value-mine-comment" type="text" placeholder="Phản hồi...">
                            </div>
                            <hr>
                            <div class="container-actions container-actions-mine">
                                <div class="action-comments action-comments-mine">
                                    <button class="btn-icon-comment btn-icon-comment-mine"><i class="fa-regular fa-face-smile"></i></button>
                                    <button class="btn-close-comment btn-close-comment-mine">HỦY</button>
                                    <button class="btn-disabled-comment btn-disabled-comment-mine">BÌNH LUẬN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="report-user-dropdown">
                <button class="btn-drop-report"><i style="font-size: 15px;" class="fa-solid fa-ellipsis-vertical"></i></button>
                <div class="user-dropdown-content">
                    <div class="user-report-content">
                        <i class="fa-solid fa-flag"></i>
                        <p class="text-report">Báo vi phạm</p>
                    </div>
                </div>
            </div>
            <div class="modal-report-user">
                <div class="modal-report-content-user">
                    <h3 class="title-modal-content" style="margin-bottom: 15px;">Báo cáo bình luận vi phạm</h3>
                    <form action="#" id="form-report-comment">
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                                                <label for="html">Nội dung rác hoặc nội dung quảng cáo không mong muốn</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                            <label for="html">Tài liệu khiêu dâm hoặc phim khiêu dâm</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                                                <label for="html">Xâm hại trẻ em</label>    
                        </div>
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                                                <label for="html">Lời nói căm thù hoặc hình ảnh bạo lực</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                                                <label for="html">Nội dung quấy rối hoặc bắt nạt</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                                                <label for="html">Tự tử hoặc tự gây thương tích</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                                                <label for="html">Thông tin sai lệch</label>
                        </div>
                    </form>
                    <div class="btn-actions-user" >
                        <button style="font-size: 14px;" class="close-modal-user">HUỶ</button>
                        <button style="font-size: 14px;">BÁO VI PHẠM</button>
                    </div>
                </div>
            </div>
        </div>`;
}).join('');

if (commentThreadRenderer != null) {
    commentThreadRenderer.innerHTML = userComment

}

// End Handle User Comments

// END FUNCTION StopPropagation 
const btnReport = document.querySelector('.btn-drop-report-video')
const dropContentReport = document.querySelector('.dropdown-content-report')

const dropSort = document.querySelector('.dropdown-sort-content')
const btnSort = document.querySelector('.sort-menu')

// HANDLE REPORT USER COMMENT
const contentReportUsers = document.querySelectorAll('.user-dropdown-content')
const modalReportUsers = document.querySelectorAll('.modal-report-user')
const reportDropUsers = document.querySelectorAll('.report-user-dropdown')
const outputCommentUsers = document.querySelectorAll('.user-output-content')

outputCommentUsers.forEach((outputCommentUser, index) => {
    const reportDropUser = reportDropUsers[index]

    outputCommentUser.onmouseover = () => {
        if (reportDropUser.classList.contains('hover')) {
            reportDropUser.classList.remove('hover')

        } else {
            reportDropUser.classList.add('hover')

        }
    }
 
    outputCommentUser.onmouseout = () => {
        reportDropUser.classList.remove('hover');
        
    }

})

reportDropUsers.forEach((reportDropUser, index) => {
    const contentReportUser = contentReportUsers[index]

    // HANDLE DROPDOWN REPORT COMMENT USER
    reportDropUser.onclick = function(e) {
        e.stopPropagation();
        
        if (contentReportUser.classList.contains('active')) {
            contentReportUser.classList.remove('active')

        } else {

            const contentReportUserActives = document.querySelectorAll('.user-dropdown-content.active')
            contentReportUserActives.forEach(contentReportUserActive => {
                contentReportUserActive.classList.remove('active')
            });

            contentReportUser.classList.toggle('active')
            dropContentReport.classList.remove('active')
            dropSort.classList.remove('active')

            body.addEventListener("click", function(e) {
                if (e.target !== contentReportUser) {
                    contentReportUser.classList.remove('active')
                }

            })
            
        }
        
    }

    // END HANDLE DROPDOWN REPORT COMMENT USER

    // HANDLE REPORT MODAL COMMENT USER
    contentReportUser.addEventListener("click", function() {

        const modalReportUser = modalReportUsers[index]

        if (modalReportUser.classList.contains('show-modal')) {
            modalReportUser.classList.remove('show-modal')

        } else {

            const modalReportContentUsers = document.querySelectorAll('.modal-report-user.show-modal')
            modalReportContentUsers.forEach(modalReportContentUser => {
                modalReportContentUser.classList.remove('show-modal')
            })

            modalReportUser.classList.toggle('show-modal')
            
            window.addEventListener("click", function(event) {
                if (event.target === modalReportUser) {
                    modalReportUser.classList.remove('show-modal')
                }
            })

            // HANDLE CANCEL CONTENT MODAL
            const closeModalUsers = document.querySelectorAll('.close-modal-user')

            for (const closeModalUser of closeModalUsers) {
                closeModalUser.addEventListener("click", function() {
                    modalReportUser.classList.remove('show-modal')
                })
            } 

            // END HANDLE CANCEL CONTENT MODAL
        }
    })
    // END REPORT HANDLE MODAL COMMENT USER
})

// END HANDLE REPORT USER COMMENT


// HANDLE TOGGLE REPORT ViDEO

stopPropagation(btnReport, dropContentReport, [dropSort, contentReportUsers])

// END HANDLE TOGGLE REPORT ViDEO

//HANDLE SORT COMMENT
stopPropagation(btnSort, dropSort, [dropContentReport, contentReportUsers])

// END HANDLE SORT COMMENT


// HANDLE MODAL REPORT VIDEO
const contentReportVideo = document.querySelector('.content-report')
const modalReportVideo = document.querySelector('.modal-report')
const closeModal = document.querySelector('.close-modal')

function toggleModalVideo() {
    modalReportVideo.classList.toggle('show-modal')
}

window.addEventListener("click", function(event) {
    if (event.target === modalReportVideo) {
        modalReportVideo.classList.remove('show-modal')
    }
})

contentReportVideo.addEventListener("click", toggleModalVideo)
closeModal.addEventListener("click", toggleModalVideo)

// END HANDLE MODAL REPORT VIDEO


// HANDLE SHOW MORE DESCRIPTION
const desc = document.querySelector('.description-content')
const showMore = document.querySelector('.btn-show-more')

const toggleShowMore = () => {
    if (desc.classList.contains('show-more-description')) {
        desc.classList.remove('show-more-description')
        showMore.innerHTML = 'hiện thêm'

    } else {
        desc.classList.add('show-more-description')
        showMore.innerHTML = 'ẩn bớt'
    }
}

showMore.addEventListener("click", toggleShowMore)

// END HANDLE SHOW MORE DESCRIPTION


// HANDLE TOGGLE BUTTON REGISTERED
const btnRegister = document.querySelector('.btn-register')

btnRegister.onclick = function () {
    if (btnRegister.classList.contains('btn-registered')) {
        btnRegister.classList.remove('btn-registered')
        btnRegister.innerHTML = 'đăng ký'

    } else {
        btnRegister.classList.add('btn-registered')
        btnRegister.innerHTML = 'đã đăng ký'
    }
}

// Handle Toggle Like Comment
const btnLikeComments = document.querySelectorAll('.like-comment-user')
btnLikeComments.forEach(btnLikeComment => {
    btnLikeComment.addEventListener("click", () => {
        btnLikeComment.classList.toggle('active')
    })
})

// End Handle Toggle Like Comment

// END HANDLE TOGGLE BUTTON REGISTERED

// HANDLE INPUT VALUE COMMENTS
const btnComment = document.querySelector('.btn-disabled-comment')
const inputValue = document.querySelector('.value-comment')
const actionComment = document.querySelector('.container-actions')
const closeComment = document.querySelector('.btn-close-comment')

const handleShowActions = () => {
    actionComment.style.display = 'block';
}

function handleCloseComment() {
    actionComment.style.display = 'none';
    inputValue.value = "";
    btnComment.classList.remove('btn-able-comment')

}

function handleComment() {
    if (inputValue.value.length > 0) {
        btnComment.classList.add('btn-able-comment')

    } else {
        btnComment.classList.remove('btn-able-comment')

    }
}

inputValue.addEventListener('click', handleShowActions);
closeComment.addEventListener('click', handleCloseComment);
inputValue.addEventListener('keyup', handleComment);

// END HANDLE INPUT VALUE COMMENTS

// Handle Comment For User
const btnFeedbackComments = document.querySelectorAll('.user-actions-comment button')
const inputMineValues = document.querySelectorAll('.value-mine-comment')
const actionMineComments = document.querySelectorAll('.container-actions-mine')
const btnMineComments = document.querySelectorAll('.btn-disabled-comment-mine')
const closeMineComments = document.querySelectorAll('.btn-close-comment-mine')
const feedbackComments = document.querySelectorAll('.feedback-comment')

feedbackComments.forEach((feedbackComment, index) => {
    const btnFeedbackComment = btnFeedbackComments[index]
    const inputMineValue = inputMineValues[index]
    const actionMineComment = actionMineComments[index]
    const closeMineComment = closeMineComments[index]
    const btnMineComment = btnMineComments[index]

    // Handle Toggle Feedback Of Comment
    function handleToggleFeedback() {
        feedbackComment.classList.add('active')
        inputMineValue.focus();
        inputMineValue.value = "";
        actionMineComment.style.display = "block";
    }

    // Handle Toggle Button Comment
    function handleToggleComment() {
        if (inputMineValue.value.length > 0) {
            btnMineComment.classList.add('btn-able-comment-mine')
        } else {
            btnMineComment.classList.remove('btn-able-comment-mine')

        }
    }

    // Close comment of mine
    function handleCloseComment() {
        feedbackComment.classList.remove('active')
        btnMineComment.classList.remove('btn-able-comment-mine')
    }
    

    btnFeedbackComment.addEventListener("click", handleToggleFeedback)
    inputMineValue.addEventListener("keyup", handleToggleComment)
    closeMineComment.addEventListener("click", handleCloseComment)

})

// End Handle comment for User



// Handle Videos Others
const itemsVideos = document.querySelectorAll('.items-video')
const actionVideoOthers = document.querySelectorAll('.actions-videos-others')
const dropActionContents = document.querySelectorAll('.dropdown-action-contents')

itemsVideos.forEach((itemVideo, index) => {
    const actionVideoOther = actionVideoOthers[index]
    const dropActionContent = dropActionContents[index]

    // handle hover when hover icon -> dropdown
    itemVideo.onmouseover= function() {
        actionVideoOther.classList.add('active')
    }

    itemVideo.onmouseout= function() {
        actionVideoOther.classList.remove('active')
    }

    // End handle hover when click icon -> dropdown

    // Handle when click in icon dropdown
    actionVideoOther.addEventListener("click", (e) => {
        e.stopPropagation()

        if (dropActionContent.classList.contains('active')) {
            dropActionContent.classList.remove('active')

        } else {
            const dropActionContentActives = document.querySelectorAll('.dropdown-action-contents.active') 

            dropActionContentActives.forEach(dropActionContentActive => {
                dropActionContentActive.classList.remove('active')
            })
            
            dropActionContent.classList.toggle('active');

            body.addEventListener("click", (e) => {
                if (e.target !== dropActionContent) {
                    dropActionContent.classList.remove('active')

                } 
            })
        }
        
    });
    // End Handle when click in icon dropdown
   
})

// End Handle Videos Others


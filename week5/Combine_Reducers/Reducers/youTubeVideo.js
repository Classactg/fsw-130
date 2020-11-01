const { bindActionCreators } = require("redux")

function setYouTubeTitle(title) {
    return {
        type: "SET_YOUTUBE_TITLE",
        payload: title
    }
}

function incrementViewCount() {
    return {
        type: "INCREMENT_VIEW_COUNT"
    }
}

function upvoteVideo() {
    return {
        type: "UPVOTE_VIDEO"
    }
}

function downVoteVideo() {
    return {
        type: "DOWNVOTE_VIDEO"
    }
}

const initialState = {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }

function youTubeVideoReducer(youTubeVideo = initialState, action) {
    switch(action.type) {
        case "INCREMENT_VIEW_COUNT":
             return {
                ...youTubeVideo,
                viewCount: youTubeVideo.viewCount + 1
            }
        case "SET_YOUTUBE_TITLE":
            return {
                ...youTubeVideo,
                title: action.payload
            }
        case "UPVOTE_VIDEO":
            return {
                    ...youTubeVideo,
                    vote: {
                         ...youTubeVideo.votes,
                         up: youTubeVideo.votes. up + 1
                }
            }
        case "DOWNVOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.vote.down + 1,
                }
            }
        default:
            return youTubeVideo
    }
}

module.exports = {youTubeVideoReducer, incrementViewCount, upvoteVideo, downVoteVideo, setYouTubeTitle}
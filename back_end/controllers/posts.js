const Post = require('../models/posts')

// get All Posts :
async function all (req, res) {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({meesage : error.message})
    }
}

// create new post :
async function createOne (req, res) {
    const post = new Post({
        title : req.body.title,
        desc : req.body.desc,
        user_id : req.body.user_id,
        is_valid : req.body.is_valid,
        stat_post : req.body.stat_post
    })
    try {
        const newPost = await post.save()
        res.json(newPost)
    } catch (err) {
        res.json({message : err.meesage})
    }
}

// Edit a post by ID :
async function edit (req, res) {
    if(!req.body) {
        return res.send({message : "They is no Data !!!"})
    }
    const id = req.params.id
    Post.findByIdAndUpdate(id, req.body, {useFindAndModify : false}).then(data => {
        if(!data) {
            res.send({
                message : 'they is no post'
            })
        } else {
            res.send({message : "Post Updated Successfuly."})
        }
    })
}

// delete by ID :
async function deletePost (req, res) {
    Post.findByIdAndDelete(req.params.id).then( () => {
        res.json({message : "Post Deleted Successfuly"})
    })
}

module.exports = {
    all,
    createOne,
    edit,
    deletePost
}
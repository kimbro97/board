import mongoose from "mongoose"

const schema = new mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        title: String,
        author: String,
        createdAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false // "__v" 필드 생성X strict : false
    }
)

export const Content = mongoose.model('content', schema)

import  { Content }  from "../../../models/index.js"

export const controller = {}
export default controller

//C
controller.createContent = async (req, res) => {
    const { title, author } = req.body
    const newContent = await Content({ title, author })
    
    const saveContent = await newContent.save()
    res.status(201).send({ data: {saveContent} })

}
//R
controller.getContent = async (req, res) => {
    const content = await Content.find({})
    res.send({content})
}

//U
controller.updateContent = async (req, res) => {
    const { id, title, author } =  req.body

    const content = await Content.findByIdAndUpdate(id, {title, author})

    res.status(201).send({message: '게시물이 업데이트 되었습니다.'})

}

//D
controller.deleteContent = async (req, res) => {
    const { id } = req.params

    const deleteContent = await Content.findByIdAndDelete(id)

    res.status(200).send({message: '게시물이 삭제되었습니다.'})
}


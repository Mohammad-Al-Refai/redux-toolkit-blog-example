export class ArticleModel {
    createdAt: string = ""
    title: string = ""
    content: string = ""
    userId: string = ""
    id: string = ""
    setCreatedAt(_createdAt: string): ArticleModel {
        this.createdAt = _createdAt
        return this
    }
    setTitle(_title: string): ArticleModel {
        this.title = _title
        return this
    }
    setContent(_content: string): ArticleModel {
        this.content = _content
        return this
    }
    setUserId(_userId: string): ArticleModel {
        this.userId = _userId
        return this
    }
    setId(_id: string): ArticleModel {
        this.id = _id
        return this
    }
}
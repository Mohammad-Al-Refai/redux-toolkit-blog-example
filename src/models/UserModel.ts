export class UserModel {
    createdAt: string = ""
    name: string = ""
    avatar: string = ""
    bio: string = ""
    id: string = ""
    setCreatedAt(_createdAt: string): UserModel {
        this.createdAt = _createdAt
        return this
    }
    setName(_name: string): UserModel {
        this.name = _name
        return this
    }
    setAvatar(_avatar: string): UserModel {
        this.avatar = _avatar
        return this
    }
    setBio(_bio: string): UserModel {
        this.bio = _bio
        return this
    }
    setId(_id: string): UserModel {
        this.id = _id
        return this
    }
}
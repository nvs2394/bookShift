var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    name:String,
    author:String,
    description:String,
    datecreated:{
        type:Date,
        default:Date.now
    }
})

var Book= mongoose.model('Book',bookSchema);

data = {
    1: {
        name: "Nhà giả Kim",
        author: "J.K. Rowling",
        thumbnail: "/images/book/nha_gia_kim_2_1.jpg",
        description: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
    },
    2: {
        name: "Mắt biếc",
        author: "Nguyễn Nhật Ánh",
        thumbnail: "/images/book/mat-biec.jpg",
        description: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
    },
    3: {
        name: "Đau thương đến chết",
        author: "Quỷ cổ nữ",
        thumbnail: "/images/book/img637_11.jpg",
        description: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
    },
    4: {
        name: "Tony Buổi Sáng - Trên Đường Băng",
        author: "Tony Buổi Sáng",
        thumbnail: "/images/book/tony-buoi-sang.jpg",
        description: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
    },
    5: {
        name: "Chuyến Phiêu Lưu Diệu Kỳ Của Edward Tulane",
        author: "Nguyễn Nhật Ánh",
        thumbnail: "/images/book/10_1_5.jpg",
        description: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
    },
    6: {
        name: "Đau thương đến chết",
        author: "Quỷ cổ nữ",
        thumbnail: "/images/book/img637_11.jpg",
        description: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
    }
};



module.exports = Book;

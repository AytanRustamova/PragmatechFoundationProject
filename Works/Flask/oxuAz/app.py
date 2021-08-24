from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
    



class Blog():
    def __init__(self, blogId, blogTitle, blogContent, blogImg):
        self.blog_id = blogId
        self.blog_title = blogTitle
        self.blog_content = blogContent
        self.blog_img = blogImg
    
blogId = 1

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/admin')
def admin():
    return render_template('/admin/index.html')




@app.route('/create', methods = ["GET", "POST"])
def createBlog():
    if request.method == "POST":
        global _id
        newsTitle = request.form['blogTitle']
        newsDesc = request.form['blogDesc']
        newsDate = request.form['blogDate']
        newsContent = request.form['blogContent']
        newsDetails = News(_id, newsDesc, newsDate, newsTitle, newsContent)
        news.append(newsDetails)
        _id = _id + 1 
        return redirect('/admin')
    
    return render_template('/admin/add_user.html')
if(__name__ == "__main__"):
    app.run(debug = True)



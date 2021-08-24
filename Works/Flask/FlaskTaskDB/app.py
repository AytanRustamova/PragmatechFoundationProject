from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)


UPLOAD_FOLDER = 'static/uploads'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///newsdb.db'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db = SQLAlchemy(app)

class Blog(db.Model):
    blog_id=db.Column(db.Integer,primary_key=True)
    blog_title=db.Column(db.String(500))
    blog_content=db.Column(db.String(5000))
    blog_img=db.Column(db.String(500))


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/show')
def show():
    blog=Blog.query.all()
    return render_template('index.html',blog=blog)


@app.route('/' )
def index():
    
    return render_template('index.html')

@app.route('/blogDetails/<int:id>')
def blogDetails(id):
    blog=Blog.query.filter_by(blog_id=id).first()
    

    return render_template("blogDetails.html", blog = blog)




@app.route('/admin', methods =["GET", "POST"])
def admin():
    blog = Blog.query.all()
    if request.method == "POST":
        file = request.files['blog_img']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        title = request.form['blog_title']
        content = request.form['blog_content']
        blog = Blog(
            blog_img = os.path.join(app.config['UPLOAD_FOLDER'], filename),
            blog_title = title,
            blog_content = content
            
        )
        db.session.add(blog)
        db.session.commit()
        return redirect('/admin')
    return render_template('/admin/index.html', blog = blog)


@app.route('/delete/<int:id>')
def delete(id):
    blog=Blog.query.filter_by(blog_id=id).first()
    db.session.delete(blog)
    db.session.commit()
    return redirect('/admin')




@app.route('/update/<int:id>',methods=['GET','POST'])
def update(id):
    blog=Blog.query.filter_by(blog_id=id).first()
    if request.method=='POST':
        blog=Blog.query.filter_by(blog_id=id).first()
        blog.blog_title=request.form['blog_title']
        blog.blog_content=request.form['blog_content']
        file = request.files['blog_img']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        db.session.commit()
        return redirect('/admin')
    return render_template('/admin/update.html', blog = blog)



if(__name__ == "__main__"):
    app.run(debug = True)



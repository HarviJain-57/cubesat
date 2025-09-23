# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.html')



# @app.route('/products')
# def products():
#     return render_template('products/cubesat_kits.html')

# @app.route('/product/<product_id>')
# def product_detail(product_id):
#     return render_template(f'products/{product_id}.html')

# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, render_template, abort
import json
import os

app = Flask(__name__)

# Load product data once at startup
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(BASE_DIR, "static", "data", "products.json")) as f:
    PRODUCTS = json.load(f)

@app.route('/')
def index():
    return render_template('index.html', products=PRODUCTS)

@app.route('/products')
def products():
    return render_template('products.html', products=PRODUCTS)

@app.route('/product/<product_id>')
def product_detail(product_id):
    normalized_id = product_id.replace('_', '-')  # convert underscores to dashes
    product = PRODUCTS.get(normalized_id)
    if not product:
        abort(404)
    return render_template('products/product_detail.html', product=product, product_id=product_id)


if __name__ == '__main__':
    app.run(debug=True)

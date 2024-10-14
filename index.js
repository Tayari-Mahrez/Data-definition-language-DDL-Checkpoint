// -- Create CUSTOMER table
CREATE TABLE Customer (
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    customer_tel NUMBER
);

// -- Create PRODUCT table
CREATE TABLE Product (
    productId VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(20) NOT NULL,
    price NUMBER CHECK (price > 0)
);

// -- Create ORDERS table
CREATE TABLE Orders (
    ordersID VARCHAR(20),
    ProductID VARCHAR(20),
    Quantity NUMBER,
    total_amount NUMBER,
    FOREIGN KEY (ordersID) REFERENCES Customer(customer_id),
    FOREIGN KEY (ProductID) REFERENCES Product(productId)
);

// Add a column Category to the PRODUCT table:

ALTER TABLE Product
ADD Category VARCHAR(20);

// /Add a column OrderDate to the ORDERS table with SYSDATE as a default value:


ALTER TABLE Orders
ADD OrderDate DATE DEFAULT SYSDATE;
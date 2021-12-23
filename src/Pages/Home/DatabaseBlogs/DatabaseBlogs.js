import React from 'react';
import './DatabaseBlogs.css';
import dataBaseImg from  '../../../../src/Demo/OkahiDatabse.png';
import { Link } from 'react-router-dom';

const DatabaseBlogs = () => {
     return (
          <div className='container my-5'>
          <div className="row pt-5">
              <div className="col-lg-4 col-md-12 col-12">
                   
              </div>
              <div className="col-lg-8 col-md-12 col-12">
              <h2 className="fw-bolder blog-title">MySQL CONCEPTS</h2>
              <div>
                   <h4 className='mt-5 fw-bolder topic-title'> What is MySQL Database ?</h4>
                   <div className='my-5'>
                   <img width="100%" src={dataBaseImg} alt="" />
                   </div>
                   <div>
                        <p className='blog-text'>MySQL is a concept of relational database management system, briefly RDBMS is called. RDBMS is a large concept for managing data for different purposes. It is also maintaining the relation between two or more data tables to get the record through the querying purpose. Where all data is stored in the database as a record and filed. Record refers to the table row which contains multiple data types in one record. Whereas, field refers to the table column it also contains a single type of data in the per field. It can’t get the whole scenario in one field.While records are able to provide clear details. </p>
                   </div>
                   <h5>There are three core concepts in relational database.</h5>
                   <ul className='ul-text'>
                             <li>Field</li>
                             <li>Record</li>
                             <li>Data</li>
                            
                    </ul>
              </div>
              <div>
                   <div>
                        <p className='blog-text'>Key field is most important where all data are value less if the key field is absent in the database table. All records are deepened on it for data searched, identified and making the relation based data table.
                        </p>
                        <ul className='ul-text'>
                             <li>Primary Key</li>
                             <li>Composite Key</li>
                             <li>Foreign Key</li>
                             
                        </ul>
                        <p className='blog-text'><span className="fw-bold">PRIMARY KEY :</span> Primary key worked for queries data from database. It takes an unique value for querying data. Which key refers to identifying a unique record form database. It’s called a primary key.</p>
                        <p className='blog-text'><span className="fw-bold">COMPOSITE KEY : </span> When making a combined  field for getting a record. Whereas missing the primary key. It’s called a composite key.</p>
                        <p className='blog-text'><span className="fw-bold">FOREIGN KEY : </span> When a primary key corresponds with one table to another table and maintains the relationship like primary to general it’s called a foreign key.</p>
                   </div>
                   <div>
                        <h4 className='fw-bold mt-5'>MySQL FEATURES</h4>
                        <p className='blog-text'>MySQL has a core feature for storing and updating data. These are</p>

                        <ul className='ul-text'>
                             <li>Create Database</li>
                             <li>Updating Database</li>
                             <li>Print Database</li>
                             <li>Breakup and Recovery</li>
                             <li>Save Database</li>
                             <li>Retrieve Data</li>
                             <li>Delete Data</li>
                             <li>Secure Data etc.</li>
                             
                        </ul>
                   </div>
                   <div>
                        <h4 className='fw-bold mt-5'>RDBMS FEATURES</h4>
                        <p className='blog-text'>There are three different way to make relational database system</p>

                        <ul className='ul-text'>
                             <li>One to one Database</li>
                             <li>Updating Database</li>
                             <li>Many to Many Database</li>
                    </ul>

                    <a href='https://miro.com/app/board/uXjVOb4Ounc=/?invite_link_id=506920716973'>Visit the link for diagram details</a>
                   </div>
              </div>
              </div>
         </div>
    </div>
     );
};

export default DatabaseBlogs;
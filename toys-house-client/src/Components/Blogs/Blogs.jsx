import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (

        <div>
            <div className="header-title">
                <h1 className='text-center'>Questions</h1>
            </div>
            <div className="question-container">
                <div className="question-box">
                    <h3 className='text-2xl'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className='text-black'>
                        Access tokens are credentials used to access protected resources. These are used as bearer tokens which can access authorized resources without further identification.

                        <br />
                        <br />
                        Refresh token is a special token which is used in obtaining additional access tokens. This token allows to have short-lived access tokens without collecting credentials every time one expires.

                        <br />
                        <br />
                        Basically, a refresh token allows to balance the user’s access needs with the organization’s security practices. On the other hand, access tokens help users to get the resources they need to complete their tasks. But those tokens can also expose the organization to data compromise or other malicious actions.

                        <br />
                        <br />
                        Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. They can be stored in the server-side session and then the application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.

                    </p>



                    <div className="question-box">
                        <h3 className='text-2xl'>2. Compare SQL and NoSQL databases?</h3>
                        <p className="text-black">
                            SQL and NoSQL databases mainly differ in relational and non-relational databases.

                            <br />
                            <br />

                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>SQL</th>
                                            <th>NoSQL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Relational database management system</td>
                                            <td>Distributed database management system</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>2</th>
                                            <td>Uses fixed or predefined schema</td>
                                            <td>Uses Dynamic Schema</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>3</th>
                                            <td>Suitable for vertical scaling</td>
                                            <td>Suitable for horizontal scaling</td>
                                        </tr>

                                        {/* row 4 */}
                                        <tr>
                                            <th>4</th>
                                            <td>Can be used for complex queries</td>
                                            <td>Not good for complex queries</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </p>
                    </div>

                    <div className="question-box">
                        <h3 className='text-2xl'>3. •	What is express JS? What is Nest JS?</h3>
                        <p className="text-black">
                            Express.js is the most popular free and open-sourced web framework for Node.js. It is used for designing and building web applications quickly and easily. Express.js only requires javascript, so it becomes easier for programmers and developers to build web applications and API.

                            <br />
                            <br />
                            Nest.JS is a popular framework used for building server-side applications. It is built using TypeScript which allows developers to build highly scalable and testable applications.


                        </p>

                        <li>Node.js is a platform for building i/o applications that are server-side event-driven and made using JavaScript.</li>
                        <li>Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</li>
                    </div>

                    <div className="question-box">
                        <h3 className='text-2xl'>4. What is mongodb aggregate and how does it work?</h3>
                        <p className="text-black">
                            MongoDB Aggregation uses a method called aggregate(), to perform the aggregation operations. This aggregation framework is a powerful feature that allows to process and analyze data within the database. It creates a way to perform complicated data manipulations, transformations, and computations residing on MongoDB collection.

                            <br />
                            <br />
                            This framework works with a pipeline approach, and the aggregation operation practices data records and provides a calculated result.  The aggregation operations assemble values from various documents together and can execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result.


                        </p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Blogs;
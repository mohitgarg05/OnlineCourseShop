import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const History = () => {
    return (
        <div>
            <Navbar />
            <div className="container history-wrapper">
                <div className="row history-content">
                    <h1>Purchase History</h1>
                </div>
                <div class="content-title-underline" style={{marginLeft:"10px",marginTop:"10px"}}></div>
                <div className="row hisory-table" >
                    <table >
                        <tr>
                            <th style={{width:"450px"}}>Courses</th>
                            <th style={{width:"100px"}}>Date</th>
                            <th style={{width:"150px"}}>Price</th>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faShoppingCart} /> <a href="" style={{marginLeft:"10px"}}>The Complete 2021 Web Development Bootcamp</a></td>
                            <td>Nov 11, 2020</td>
                            <td>₹420</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faShoppingCart} /><a href="" style={{marginLeft:"10px"}}>Mastering Data Structures & Algorithms using C and C++</a></td>
                            <td>Nov 11, 2020</td>
                            <td>₹420</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faShoppingCart} /><a href="" style={{marginLeft:"10px"}}>Flutter & Dart - The Complete Guide [Arabic Edition]</a></td>
                            <td>Nov 11, 2020</td>
                            <td>₹420</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faShoppingCart} /><a href="" style={{marginLeft:"10px"}}>Learn C++ Programming -Beginner to Advance- Deep Dive in C++</a></td>
                            <td>Nov 11, 2020</td>
                            <td>₹420</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faShoppingCart} /><a href="" style={{marginLeft:"10px"}}>Photography Masterclass: A Complete Guide to Photography</a></td>
                            <td>Nov 11, 2020</td>
                            <td>₹420</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default History

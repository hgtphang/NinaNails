import { VscLocation } from "react-icons/vsc";
import { GrPhone } from "react-icons/gr";

export default function contact () {
    return(
        <div className="contact" id="contact">
            <h2>Contact Us</h2>
            <hr/>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
            <br/>
            
            <h3>Nina's Nail and Spa</h3>
            <p><VscLocation/> 613 N Pottstown Pike, Exton, PA 19341</p>
            <p><GrPhone/> Phone: (484) 879-6236 </p>
            <br/>

            <h3>Business Hours</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td className="time">10 AM - 7 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td className="time">Closed</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td className="time">10 AM - 7 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td className="time">10 AM - 7 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td className="time">10 AM - 7 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td className="time">9 AM - 6 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td className="time">10 AM - 5 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default function Contact() {
    return (
        <body>
            <h1>Contact Us</h1>
            <div class="container">
                <form class="form-floating mb-3 mt-3">
                    <div class="form-group mb-3 mt-3">
                        <label for="firstName" class="form-label">First Name:</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" name="firstName"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="lastName" class="form-label">Last Name:</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" name="lastName"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="phone" class="form-label">Phone Number:</label>
                        <input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your phone number"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email" class="form-label">Email Address:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email address" name="email"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="country" class="form-label">Country:</label>
                        <input type="text" class="form-control" id="country" placeholder="Enter your country" name="country"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="message" class="form-label">Message:</label>
                        <textarea class="form-control" id="message" name="message" placeholder="Enter your message" rows="5" cols="50"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </body>
    );
}
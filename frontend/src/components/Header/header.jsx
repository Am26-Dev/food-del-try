import "./header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>Your Cravings, Delivered!</h1>
                <p>Discover the best dishes from your favorite restaurants and order with ease.</p>
                <div className="button-group">
                    <button className="primary-button">Order Now</button>
                    <button className="secondary-button">View Menu</button>
                </div>
            </div>
        </div>
    );
};

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "jquery";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
    return (
        <div>
            <div className={"bg-primary"}>
                <div className={"row m-0 text-white py-2 px-2 text-center"}>
                    <div className={"col-md-3 col-sm-6 col-12"}>Dịch vụ</div>
                    <div className={"col-md-3 col-sm-6 col-12"}>Dịch vụ</div>
                    <div className={"col-md-3 col-sm-6 col-12"}>Dịch vụ</div>
                    <div className={"col-md-3 col-sm-6 col-12"}>Dịch vụ</div>
                </div>
            </div>
            <div className={"py-1 bg-white"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-3 col-sm-6 col-12 text-md-left text-center py-md-0 py-2"}>
                            <img
                                src={"https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/213750939_557994991903593_2952609766275290837_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ggi86ejG8OMAX_1JRpq&_nc_ht=scontent-hkg4-2.xx&oh=44174a617e8647a7da1d0c20823973e2&oe=60EEDCF3"}
                                className={"w-50 "}
                            />
                        </div>
                        <div className={"col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"}>
                            <div className={"input-group "}>
                                <input type={"text"} className={"form-control rounded-0"} placeholder={"Tìm kiếm tất cả"}/>
                                <button className={"btn btn-outline-primary rounded-0"}>Tìm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-primary"}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
                    <a className="navbar-brand" href="#">Linh React</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Trang chủ <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">Giới thiệu<span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Liên hệ<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sản phẫm
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Mới nhất</a>
                                    <a className="dropdown-item" href="#">Đang giảm giá</a>
                                    <a className="dropdown-item" href="#">Thịnh hành</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
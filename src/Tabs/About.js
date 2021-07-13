var data = window.location.pathname;

    data = data.replace("/about/","");

const About = () => {
    return (
        <>
            <div className={"container py-2"}>
                <p> Đây là trang About </p>
                <button className={"btn btn-success"}>
                    {data}
                </button>

            </div>
        </>
    );
}
export default About;
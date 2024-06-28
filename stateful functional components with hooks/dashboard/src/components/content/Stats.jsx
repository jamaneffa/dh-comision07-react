import PropTypes from "prop-types";

export default function Stats ({icon, icon_color, value, title}) {
    return (
        <div className="info-box">
                <div className="box-icon">
                    <i className={icon} style={{fontSize: '2.5rem', color: icon_color}}></i>
                </div>

                <div className="box-content">
                    <span className="big">{value}</span>
                    {title}
                </div>
        </div>
    )
}

Stats.propTypes = {
    icon: PropTypes.string.isRequired,
    icon_color: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

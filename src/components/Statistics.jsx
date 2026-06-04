import { StatiscticsItemLabelStyled, StatiscticsItemPercentageStyled, StatiscticsItemStyled, StatiscticsListStyled, StatiscticsStyled, StatiscticsTitleStyled } from "../styles/Main.styled";

const Statistics = ({ title, stats }) => {
    return (
        <StatiscticsStyled className="statistics">
            {title && (<StatiscticsTitleStyled className="title">{title}</StatiscticsTitleStyled>)}

            <StatiscticsListStyled className="stat-list">
                {stats.map(({id, label, percentage}) => (
                    <StatiscticsItemStyled className="item" bgColor={Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")} key={id}>
                        {/* генерацію я зробив з чатом гпт, щоби менше коду було для генерації рандомного кольору */}
                        <StatiscticsItemLabelStyled className="label">{label}</StatiscticsItemLabelStyled>
                        <StatiscticsItemPercentageStyled className="percentage">{percentage}%</StatiscticsItemPercentageStyled>
                    </StatiscticsItemStyled>
                ))}
            </StatiscticsListStyled>
        </StatiscticsStyled>
    );
};

export default Statistics;
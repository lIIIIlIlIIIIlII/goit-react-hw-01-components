import {
  StatisticsCard, StatisticsTitle, StatisticsList, StatisticsListItem, StatisticsListItemName
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({title, stats, id}) => {
    return (
        <StatisticsCard class="statistics">
            {title && <StatisticsTitle class="title">{title}</StatisticsTitle>}

  <StatisticsList class="stat-list">
                {stats.map(({ id, label, percentage}) => (
                    <StatisticsListItem class="item" key={id}>
      <StatisticsListItemName class="label">{label}</StatisticsListItemName>
      <StatisticsListItemName class="percentage">{percentage}</StatisticsListItemName>
    </StatisticsListItem>
    ))}
       
  </StatisticsList>
</StatisticsCard>
    )
}
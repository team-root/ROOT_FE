import styled from 'styled-components';
import { colors, font } from '../../theme';
import Calendar from 'react-calendar';

export const CalendarContainerStyle = styled.div`
  .react-calendar__navigation {
    display: flex;
    gap: 24px;
    align-items: center;
    background-color: transparent;
    margin-bottom: 36px;
  }
  .react-calendar__navigation button {
    width: 25px;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active,
    &.react-calendar__tile--active,
    &:enabled:hover,
    &:enabled:focus {
      background-color: transparent;
    }
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    //요일 밑줄 제거
    text-decoration: none;
  }

  .react-calendar__navigation button:disabled {
    //nav 비활성화
    opacity: 0.5;
  }

  .react-calendar__navigation__label {
    color: ${colors.gray[200]};
    font: ${font.Heading1};
    max-width: 305px;
  }

  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    color: ${colors.gray[200]};
  }

  .react-calendar {
    width: 840px;
    height: 100%;
    justify-content: center;
    /* overflow: hidden; */
    box-sizing: border-box;
    background-color: transparent;
    border: none;
  }

  .react-calendar__tile {
    overflow: visible !important;
    position: relative;
    border-right: 1px solid ${colors.gray[500]};
    border-bottom: 1px solid ${colors.gray[500]};
    width: 120px;
    height: 120px;
    background-color: ${colors.gray[550]};
    display: flex;
    justify-content: end;
    align-items: start;
    padding: 16px;
    font: ${font.Body2};
    color: ${colors.gray[100]};
    &:hover,
    &:focus,
    &:active,
    &.react-calendar__tile--active,
    &:enabled:hover,
    &:enabled:focus {
      background-color: ${colors.gray[550]};
    }
  }

  .react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--weekend.react-calendar__month-view__days__day--neighboringMonth {
    border-right: 1px solid ${colors.gray[500]};
    border-bottom: 1px solid ${colors.gray[500]};
    width: 120px;
    height: 120px;
    background-color: ${colors.gray[550]};
    display: flex;
    justify-content: end;
    align-items: start;
    padding: 16px;
    opacity: 0.7;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    border-right: 1px solid ${colors.gray[500]};
    border-bottom: 1px solid ${colors.gray[500]};
    width: 120px;
    height: 120px;
    background-color: ${colors.gray[550]};
    display: flex;
    justify-content: end;
    align-items: start;
    padding: 16px;
    opacity: 0.8;
  }

  /* 일요일 색상 */
  .react-calendar__tile:nth-child(1) {
    color: ${colors.error}; /* 일요일은 빨간색 */
  }

  /* 토요일 색상 */
  .react-calendar__tile:nth-child(7) {
    color: ${colors.main[100]}; /* 토요일은 다른 색상 */
  }

  .react-calendar__month-view {
    background-color: ${colors.gray[500]};
  }

  .react-calendar__month-view__weekdays__weekday {
    font: ${font.Body2};
    color: ${colors.gray[100]};
    width: 120px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
    color: ${colors.main[100]};
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(1) abbr {
    color: ${colors.error};
  }

  .react-calendar__tile--now abbr {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${colors.main[100]};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.gray[100]};
  }

  .react-calendar__tile--now {
    padding: 9px;
  }

  .react-calendar__viewContainer {
    clip-path: inset(0 round 16px);
    border: 1px solid ${colors.gray[500]};
    border-radius: 16px;
    z-index: -1;
  }
`;

export const StyledCalendar = styled(Calendar)``;

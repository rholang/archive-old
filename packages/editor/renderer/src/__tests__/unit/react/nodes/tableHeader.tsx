import * as React from 'react';
import { shallow, mount } from 'enzyme';
import {
  TableHeader,
  withSortableColumn,
  CellWithSortingProps,
} from '../../../../react/nodes/tableCell';
import { MODE, PLATFORM } from '../../../../analytics/events';
import {
  ACTION,
  ACTION_SUBJECT,
  EVENT_TYPE,
} from '../../../../analytics/enums';
import { RendererCssClassName } from '../../../../consts';
import { SortOrder } from '@atlaskit/editor-common';

describe('Renderer - React/Nodes/TableHeader', () => {
  const baseProps = {
    colspan: 6,
    rowspan: 3,
    background: '#fab',
    colwidth: [10],
  };

  describe('withCellProps', () => {
    it('should create a <th>-tag', () => {
      const tableHeader = shallow(<TableHeader />).dive();
      expect(tableHeader.name()).toEqual('th');
    });

    it('should render the <th> props', () => {
      const tableHeader = shallow(<TableHeader {...baseProps} />).dive();
      expect(tableHeader.name()).toEqual('th');

      expect(tableHeader.prop('rowSpan')).toEqual(3);
      expect(tableHeader.prop('colSpan')).toEqual(6);
      expect(tableHeader.prop('data-colwidth')).toEqual('10');

      expect(tableHeader.prop('style')).toEqual({
        backgroundColor: '#fab',
      });
    });

    it('should render the colwidths', () => {
      const colwidth = [10, 12, 14];
      const tableRow = shallow(<TableHeader colwidth={colwidth} />).dive();

      expect(tableRow.prop('data-colwidth')).toEqual('10,12,14');
    });
  });

  describe('withSortableColumn', () => {
    let WithSortableColumn: React.ComponentType<CellWithSortingProps>;
    const TestComp = ({ onClick }: CellWithSortingProps) => (
      <button onClick={onClick} />
    );

    beforeEach(() => {
      const O = withSortableColumn(TestComp);

      WithSortableColumn = props => <O {...props} isHeaderRow />;
    });

    describe('when allowColumnSorting is the default value', () => {
      it('should not add sortable class name', () => {
        const wrapper = mount(<WithSortableColumn />);

        expect(
          wrapper.find(TestComp).hasClass(RendererCssClassName.SORTABLE_COLUMN),
        ).toBeFalsy();
      });
    });

    describe('when allowColumnSorting is false', () => {
      it('should not add sortable class name', () => {
        const wrapper = mount(
          <WithSortableColumn allowColumnSorting={false} />,
        );

        expect(
          wrapper.find(TestComp).hasClass(RendererCssClassName.SORTABLE_COLUMN),
        ).toBeFalsy();
      });
    });

    describe('when allowColumnSorting is true', () => {
      it('should add sortable class name', () => {
        const wrapper = mount(<WithSortableColumn allowColumnSorting />);
        expect(
          wrapper.find(TestComp).hasClass(RendererCssClassName.SORTABLE_COLUMN),
        ).toBeTruthy();
      });

      describe('when onSorting function does not exist', () => {
        it('should add sortable not allowed class name', () => {
          const wrapper = mount(<WithSortableColumn allowColumnSorting />);

          expect(
            wrapper
              .find(TestComp)
              .hasClass(RendererCssClassName.SORTABLE_COLUMN_NOT_ALLOWED),
          ).toBeTruthy();
        });
      });

      describe('when onSorting function exist', () => {
        let onSorting: any;
        let wrapper: any;
        beforeEach(() => {
          onSorting = jest.fn();
          wrapper = mount(
            <WithSortableColumn
              allowColumnSorting
              columnIndex={0}
              onSorting={onSorting}
            />,
          );
        });

        it('should not add sortable not allowed class name', () => {
          expect(
            wrapper
              .find(TestComp)
              .hasClass(RendererCssClassName.SORTABLE_COLUMN_NOT_ALLOWED),
          ).toBeFalsy();
        });

        it('should call onSorting on click', () => {
          wrapper.find('button').simulate('click');
          expect(onSorting).toHaveBeenCalled();
        });
      });

      describe('call onSorting changing the sort order', () => {
        let onSorting: any;
        beforeEach(() => {
          onSorting = jest.fn();
        });

        it.each([
          { from: SortOrder.NO_ORDER, to: SortOrder.ASC },
          { from: SortOrder.ASC, to: SortOrder.DESC },
          { from: SortOrder.DESC, to: SortOrder.NO_ORDER },
          { from: null, to: SortOrder.NO_ORDER },
        ])('should change %o ', ({ from, to }) => {
          const wrapper = mount(
            <WithSortableColumn
              sortOrdered={from}
              allowColumnSorting
              columnIndex={0}
              onSorting={onSorting}
            />,
          );

          wrapper.find('button').simulate('click');

          expect(onSorting).toBeCalledWith(0, to);
        });
      });
    });
  });

  describe('#fireAnalyticsEvent', () => {
    describe('when onSorting and columnIndex is available', () => {
      it('should call the function with SORT_COLUMN_NOT_ALLOWED', () => {
        const fireAnalyticsEvent = jest.fn();
        const tableCell = shallow(
          <TableHeader
            fireAnalyticsEvent={fireAnalyticsEvent}
            columnIndex={1}
            allowColumnSorting
            isHeaderRow
          />,
        );

        tableCell.simulate('click');

        expect(fireAnalyticsEvent).toHaveBeenCalledWith({
          action: ACTION.SORT_COLUMN_NOT_ALLOWED,
          actionSubject: ACTION_SUBJECT.TABLE,
          attributes: {
            platform: PLATFORM.WEB,
            mode: MODE.RENDERER,
          },
          eventType: EVENT_TYPE.TRACK,
        });
      });
    });

    describe('when onSorting is not available', () => {
      it('should call the function with SORT_COLUMN_NOT_ALLOWED', () => {
        const fireAnalyticsEvent = jest.fn();
        const onSorting = jest.fn();
        const tableCell = shallow(
          <TableHeader
            fireAnalyticsEvent={fireAnalyticsEvent}
            onSorting={onSorting}
            columnIndex={1}
            allowColumnSorting
            isHeaderRow
          />,
        );

        tableCell.simulate('click');

        expect(fireAnalyticsEvent).toHaveBeenCalledWith({
          action: ACTION.SORT_COLUMN,
          actionSubject: ACTION_SUBJECT.TABLE,
          attributes: {
            platform: PLATFORM.WEB,
            mode: MODE.RENDERER,
            columnIndex: 1,
            sortOrder: SortOrder.NO_ORDER,
          },
          eventType: EVENT_TYPE.TRACK,
        });
      });
    });

    describe('when columnIndex is null', () => {
      it('should call the function with SORT_COLUMN_NOT_ALLOWED', () => {
        const fireAnalyticsEvent = jest.fn();
        const onSorting = jest.fn();
        const tableCell = shallow(
          <TableHeader
            onSorting={onSorting}
            fireAnalyticsEvent={fireAnalyticsEvent}
            allowColumnSorting
            isHeaderRow
          />,
        );

        tableCell.simulate('click');

        expect(fireAnalyticsEvent).toHaveBeenCalledWith({
          action: ACTION.SORT_COLUMN_NOT_ALLOWED,
          actionSubject: ACTION_SUBJECT.TABLE,
          attributes: {
            platform: PLATFORM.WEB,
            mode: MODE.RENDERER,
          },
          eventType: EVENT_TYPE.TRACK,
        });
      });
    });
  });
});

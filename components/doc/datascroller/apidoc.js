import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects to display.</td>
                            </tr>
                            <tr>
                                <td>rows</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of rows to fetch in a load event.</td>
                            </tr>
                            <tr>
                                <td>inline</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if the event target to listen the scroll event is the element itself.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Max height of the content area in inline mode.</td>
                            </tr>
                            <tr>
                                <td>loader</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Determines whether data is loaded by a target element.</td>
                            </tr>
                            <tr>
                                <td>buffer</td>
                                <td>number</td>
                                <td>0.9</td>
                                <td>Number of buffer size.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the value and returns the content for it.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Label of header.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Label of footer.</td>
                            </tr>
                            <tr>
                                <td>emptyMessage</td>
                                <td>any</td>
                                <td>No records found</td>
                                <td>Text to display when there is no data.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onLazyLoad</td>
                                <td>
                                    event.first = First row offset <br />
                                    event.rows = Number of rows per page <br />
                                </td>
                                <td>Callback to invoke in lazy mode to load new data.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>Following is the list of structural style classes</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-datascroller</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-content</td>
                                <td>Wrapper of item container.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-list</td>
                                <td>Item container element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        DataScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. List element can be also
                        customized for accessibility using <i>listProps</i> property.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any built-in interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}

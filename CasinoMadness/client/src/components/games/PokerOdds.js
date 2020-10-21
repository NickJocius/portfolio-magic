import React, { Fragment } from 'react';

const PokerOdds = () => {
    return (
        <Fragment>
            <section className="container-xl m-auto" id="tableSection">
                <table className="table table-hover table-dark table-responsive-sm" id="oddsTable">
                    <colgroup>
                        <col className="firstCol" />
                        <col className="secondCol" />
                        <col className="firstCol" />
                        <col className="secondCol" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">Hand</th>
                            <th scope="col">Payoff</th>
                            <th scope="col">Hand</th>
                            <th scope="col">Payoff</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Royal Flush</td>
                            <td>x 250</td>
                            <td>Straight</td>
                            <td>x 4</td>
                        </tr>
                        <tr>
                            <td>Straight Flush</td>
                            <td>x 50</td>
                            <td>3 of a Kind</td>
                            <td>x 3</td>
                        </tr>
                        <tr>
                            <td>4 of a Kind</td>
                            <td>x 25</td>
                            <td>2 Pair</td>
                            <td>x 2</td>
                        </tr>
                        <tr>
                            <td>Full House</td>
                            <td>x 9</td>
                            <td>Jacks or Better</td>
                            <td>x 1</td>
                        </tr>
                        <tr>
                            <td>Flush</td>
                            <td>x 6</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </Fragment>
    )
}

export default PokerOdds;

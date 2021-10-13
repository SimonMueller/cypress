import { observer } from 'mobx-react'
import React, { Component, ReactElement } from 'react'

import FileNameOpener from '../lib/file-name-opener'
import { RunnablesStore } from './runnables-store'

const renderRunnableHeader = (children: ReactElement) => <div className="runnable-header">{children}</div>

const formatDuration = (duration: number) => duration ? String((duration / 1000).toFixed(2)).padStart(5, '0') : '--'

interface RunnableHeaderProps {
  runnablesStore: RunnablesStore
  spec: Cypress.Cypress['spec']
}

@observer
class RunnableHeader extends Component<RunnableHeaderProps> {
  render () {
    const { runnablesStore, spec } = this.props

    const relativeSpecPath = spec.relative

    if (spec.relative === '__all') {
      if (spec.specFilter) {
        return renderRunnableHeader(
          <span><span>Specs matching "{spec.specFilter}"</span></span>,
        )
      }

      return renderRunnableHeader(
        <span><span>All Specs</span></span>,
      )
    }

    const fileDetails = {
      absoluteFile: spec.absolute,
      column: 0,
      line: 0,
      originalFile: relativeSpecPath,
      relativeFile: relativeSpecPath,
    }

    return renderRunnableHeader(
      <>
        <FileNameOpener fileDetails={fileDetails} />
        <span style={{ float: 'right' }}>{formatDuration(runnablesStore.duration)}</span>
      </>,
    )
  }
}

export default RunnableHeader

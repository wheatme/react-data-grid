import { connect, EventTypes } from '../stateManagement';
import InteractionMasks from '../masks/InteractionMasks';

const mapStateToProps = ({ selectedPosition, copiedPosition, isEditorEnabled, firstEditorKeyPress }) => ({
  selectedPosition,
  copiedPosition,
  isEditorEnabled,
  firstEditorKeyPress
});

const mapDispatchToProps = (dispatch) => ({
  selectCell: ({ idx, rowIdx }) => dispatch({ idx, rowIdx, type: EventTypes.selectCell }),
  toggleCellEdit: (isEditorEnabled, firstEditorKeyPress) => dispatch({ isEditorEnabled, firstEditorKeyPress, type: EventTypes.toggleCellEdit }),
  onCommit: () => dispatch({ isEditorEnabled: false, type: EventTypes.onCommit }),
  onCommitCancel: () => dispatch({ isEditorEnabled: false, type: EventTypes.onCommitCancel }),
  copyCell: ({ idx, rowIdx, value }) => dispatch({ idx, rowIdx, value, type: EventTypes.copyCell }),
  cancelCopyCell: () => dispatch({ type: EventTypes.cancelCopyCell })
});

export default connect(mapStateToProps, mapDispatchToProps)(InteractionMasks);
